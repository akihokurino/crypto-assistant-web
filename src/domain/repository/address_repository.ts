import {Address} from "../model/address";

export interface IAddressRepository {
  getAllOfMe(): Promise<Address[]>;
}