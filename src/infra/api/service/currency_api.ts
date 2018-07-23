import {ICurrencyRepository} from "../../../domain/repository/currency_repository";
import {IApiClient} from "../client";
import {Currency, CurrencyPrice} from "../../../domain/model/currency";
import {common, currency, currency_price} from "../rpc/api";
import Empty = common.Empty;
import {BufferWriter, Writer} from "protobufjs";
import CurrencyListResponse = currency.CurrencyListResponse;
import CurrencyResponse = currency.CurrencyResponse;
import CurrencyPriceListResponse = currency_price.CurrencyPriceListResponse;
import CurrencyPriceResponse = currency_price.CurrencyPriceResponse;

class CurrencyAPI implements ICurrencyRepository {

  constructor(readonly client: IApiClient) {

  }

  public getAll(): Promise<Currency[]> {
    const currencies: Promise<Currency[]> = new Promise<Currency[]>((resolve, reject) => {
      const req: Empty = new Empty();
      const writer: BufferWriter | Writer = Writer.create();
      this.client.post("/currency.CurrencyService/GetAll", Empty.encode(req, writer).finish())
        .then((binary: Uint8Array): void => {
          const res: CurrencyListResponse = CurrencyListResponse.decode(binary);
          const items: Currency[] = res.items.map((item: CurrencyResponse): Currency => {
            return Currency.from(item);
          });

          resolve(items);
        })
        .catch((error: Error): void => {
          reject(error);
        });
    });

    const prices: Promise<CurrencyPrice[]> = new Promise<CurrencyPrice[]>((resolve, reject) => {
      const req: Empty = new Empty();
      const writer: BufferWriter | Writer = Writer.create();
      this.client.post("/currency_price.CurrencyPriceService/GetLast", Empty.encode(req, writer).finish())
        .then((binary: Uint8Array): void => {
          const res: CurrencyPriceListResponse = CurrencyPriceListResponse.decode(binary);
          const items: CurrencyPrice[] = res.items.map((item: CurrencyPriceResponse): CurrencyPrice => {
            return CurrencyPrice.from(item);
          });

          resolve(items);
        })
        .catch((error: Error): void => {
          reject(error);
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

const createCurrencyAPI = (client: IApiClient): ICurrencyRepository => {
  return new CurrencyAPI(client);
};

export { createCurrencyAPI };
