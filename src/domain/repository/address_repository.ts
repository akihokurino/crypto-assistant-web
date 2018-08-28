import {Address} from "../model/address";

export interface IAddressRepository {
  getAll(): Promise<Address[]>;
  create(address: Address): Promise<Address>;
  delete(address: Address): Promise<void>;
}