import {user} from "../../infra/api/rpc/api";
import AssetResponse = user.AssetResponse;

export class Asset {
  public static from(from: AssetResponse): Asset {
    return new Asset(from.amount);
  }

  constructor(public readonly jpy: number) {

  }

  public getJPYAssetString(): string {
    return "¥" + this.jpy.toString();
  }
}