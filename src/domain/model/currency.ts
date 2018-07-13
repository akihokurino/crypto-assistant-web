import {currency} from "../../infra/api/rpc/api";
import CurrencyResponse = currency.CurrencyResponse;

export class Currency {
  public static from(from: CurrencyResponse): Currency {
    return new Currency(from.code, from.name, from.iconURL);
  }

  constructor(public readonly code: string,
              public readonly name: string,
              public readonly iconURL: string) {

  }
}