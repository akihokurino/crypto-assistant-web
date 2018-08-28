import {IApiClient} from "../client";
import {address, common} from "../rpc/api";
import {BufferWriter, Writer} from "protobufjs";
import {IAddressRepository} from "../../../domain/repository/address_repository";
import {Address} from "../../../domain/model/address";
import Empty = common.Empty;
import AddressListResponse = common.AddressListResponse;
import AddressResponse = common.AddressResponse;
import getToken from "./bind_token";
import CreateAddressRequest = address.CreateAddressRequest;
import AddressID = address.AddressID;

class AddressAPI implements IAddressRepository {

  constructor(readonly client: IApiClient) {

  }

  public getAll = (): Promise<Address[]> => {
    return new Promise<Address[]>((resolve, reject) => {
      getToken()
        .then((token: string): Promise<Uint8Array> => {
          const req: Empty = new Empty();
          const writer: BufferWriter | Writer = Writer.create();
          return this.client.postWithToken("/user.MeService/GetAddresses", token, Empty.encode(req, writer).finish());
        })
        .then((binary: Uint8Array): void => {
          const res: AddressListResponse = AddressListResponse.decode(binary);
          const items: Address[] = res.items.map((item: AddressResponse): Address => {
            return Address.from(item);
          });
          resolve(items);
        })
        .catch((error: Error): void => {
          reject(error);
        });
    });
  }

  public create = (item: Address): Promise<Address> => {
    return new Promise<Address>((resolve, reject) => {
      getToken()
        .then((token: string): Promise<Uint8Array> => {
          const req: CreateAddressRequest = new CreateAddressRequest();
          req.currencyCode = item.code;
          req.value = item.text;
          const writer: BufferWriter | Writer = Writer.create();
          return this.client.postWithToken("/address.AddressService/Create", token, CreateAddressRequest.encode(req, writer).finish());
        })
        .then((binary: Uint8Array): void => {
          const res: AddressResponse = AddressResponse.decode(binary);
          resolve(Address.from(res));
        })
        .catch((error: Error): void => {
          reject(error);
        });
    });
  }

  public delete = (item: Address): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      getToken()
        .then((token: string): Promise<Uint8Array> => {
          const req: AddressID = new AddressID();
          req.addressId = item.id;
          const writer: BufferWriter | Writer = Writer.create();
          return this.client.postWithToken("/address.AddressService/Delete", token, AddressID.encode(req, writer).finish());
        })
        .then((binary: Uint8Array): void => {
          resolve();
        })
        .catch((error: Error): void => {
          reject(error);
        });
    });
  }
}

const createAddressAPI = (client: IApiClient): IAddressRepository => {
  return new AddressAPI(client);
};

export { createAddressAPI };