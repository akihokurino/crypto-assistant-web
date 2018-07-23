import {Address} from "../model/address";

export interface IAddressRepository {
  getMine(): Promise<Address[]>;
}