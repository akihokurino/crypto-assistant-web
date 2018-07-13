import {ICurrencyRepository} from "../../../domain/repository/currency_repository";
import {IApiClient} from "../client";
import {Currency, CurrencyPrice} from "../../../domain/model/currency";
import {common, currency, currency_price} from "../rpc/api";
import Empty = common.Empty;
import {Writer} from "protobufjs";
import CurrencyListResponse = currency.CurrencyListResponse;
import CurrencyResponse = currency.CurrencyResponse;
import CurrencyPriceListResponse = currency_price.CurrencyPriceListResponse;
import CurrencyPriceResponse = currency_price.CurrencyPriceResponse;

class CurrencyAPI implements ICurrencyRepository {

  public getAll(client: IApiClient): Promise<Currency[] | null> {
    const currencies: Promise<Currency[] | null> = new Promise<Currency[] | null>((resolve, reject) => {
      const req = new Empty();
      const writer = Writer.create();
      client.post("/currency.CurrencyService/GetAll", Empty.encode(req, writer).finish())
        .then((binary: Uint8Array) => {
          const res: CurrencyListResponse = CurrencyListResponse.decode(binary);
          const items: Currency[] = res.items.map((item: CurrencyResponse): Currency => {
            return Currency.from(item);
          });

          resolve(items);
        })
        .catch((e) => {
          resolve(null);
        });
    });

    const prices: Promise<CurrencyPrice[] | null> = new Promise<CurrencyPrice[] | null>((resolve, reject) => {
      const req = new Empty();
      const writer = Writer.create();
      client.post("/currency_price.CurrencyPriceService/GetLast", Empty.encode(req, writer).finish())
        .then((binary: Uint8Array) => {
          const res: CurrencyPriceListResponse = CurrencyPriceListResponse.decode(binary);
          const items: CurrencyPrice[] = res.items.map((item: CurrencyPriceResponse): CurrencyPrice => {
            return CurrencyPrice.from(item);
          });

          resolve(items);
        })
        .catch((e) => {
          resolve(null);
        });
    });

    return Promise.all([currencies, prices])
      .then((result: any): Currency[] => {
        const _currencies: Currency[] = result[0];
        const _prices: CurrencyPrice[] = result[1];

        return _currencies.map((item: Currency): Currency => {
          for (const _price of _prices) {
            if (item.code === _price.code) {
              return item.bindPrice(_price);
            }
          }
          return item;
        });
      });
  }
}

const createCurrencyRepository = (): ICurrencyRepository => {
  return new CurrencyAPI();
};

export { createCurrencyRepository };
