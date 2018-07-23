import {Address} from "../model/address";

export interface IAddressRepository {
  getMine(): Promise<Address[]>;
  create(address: Address): Promise<Address>;
  delete(address: Address): Promise<void>;
}