import {Address} from "../model/address";

export interface IAddressRepository {
  getAll(userId: string | null): Promise<Address[]>;
  create(address: Address): Promise<Address>;
  delete(address: Address): Promise<void>;
}