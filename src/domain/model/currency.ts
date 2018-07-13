import {currency, currency_price} from "../../infra/api/rpc/api";
import CurrencyResponse = currency.CurrencyResponse;
import CurrencyPriceResponse = currency_price.CurrencyPriceResponse;
import * as Long from "long";

export class Currency {
  public static from(from: CurrencyResponse): Currency {
    return new Currency(from.code, from.name, from.iconURL, null);
  }

  constructor(public readonly code: string,
              public readonly name: string,
              public readonly iconURL: string,
              public readonly price: CurrencyPrice | null) {

  }

  public bindPrice(price: CurrencyPrice): Currency {
    return new Currency(
      this.code,
      this.name,
      this.iconURL,
      price,
    );
  }

  public getJPYPriceString(): string {
    if (this.price != null) {
      return "¥" + this.price.jpy.toString();
    } else {
      return "¥0";
    }
  }
}

export class CurrencyPrice {
  public static from(from: CurrencyPriceResponse): CurrencyPrice {
    return new CurrencyPrice(from.currencyCode, from.jpy, from.usd);
  }

  constructor(public readonly code: string,
              public readonly jpy: number | Long,
              public readonly usd: number) {

  }
}