import {ICurrencyRepository} from "../../../domain/repository/currency_repository";
import {IApiClient} from "../client";
import {Currency} from "../../../domain/model/currency";
import {common, currency} from "../rpc/api";
import Empty = common.Empty;
import {Writer} from "protobufjs";
import CurrencyListResponse = currency.CurrencyListResponse;
import CurrencyResponse = currency.CurrencyResponse;

class CurrencyAPI implements ICurrencyRepository {

  public getAll(client: IApiClient): Promise<Currency[] | null> {
    return new Promise<Currency[] | null>((resolve, reject) => {
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
  }
}

const createCurrencyRepository = (): ICurrencyRepository => {
  return new CurrencyAPI();
};

export { createCurrencyRepository };
