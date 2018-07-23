import {user} from "../../infra/api/rpc/api";
import PortfolioResponse = user.PortfolioResponse;

export class Portfolio {
  public static from(from: PortfolioResponse): Portfolio {
    return new Portfolio(from.currencyCode, from.amount, from.jpyAsset);
  }

  constructor(public readonly currencyCode: string,
              public readonly amount: number,
              public readonly jpyAsset: number) {

  }
}