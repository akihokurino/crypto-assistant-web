import {common} from "../../infra/api/rpc/api";
import AddressResponse = common.AddressResponse;

export class Address {
  public static from(from: AddressResponse): Address {
    return new Address(from.id, from.currencyCode, from.value);
  }

  constructor(public readonly id, public readonly code: string, public readonly text: string) {

  }
}