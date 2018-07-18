import {common, user} from "../../infra/api/rpc/api";
import AssetResponse = user.AssetResponse;
import AddressResponse = common.AddressResponse;

export class Address {
  public static from(from: AddressResponse): Address {
    return new Address(from.currencyCode, from.value);
  }

  constructor(public readonly code: string, public readonly text: string) {

  }
}