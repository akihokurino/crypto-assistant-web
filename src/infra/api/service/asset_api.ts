import {IApiClient} from "../client";
import {common, user} from "../rpc/api";
import {BufferWriter, Writer} from "protobufjs";
import {IAssetRepository} from "../../../domain/repository/asset_repository";
import {Asset} from "../../../domain/model/asset";
import Empty = common.Empty;
import AssetResponse = user.AssetResponse;
import getToken from "./bind_token";

class AssetAPI implements IAssetRepository {

  constructor(readonly client: IApiClient) {

  }

  public get = (): Promise<Asset> => {
    return new Promise<Asset>((resolve, reject) => {
      getToken()
        .then((token: string): Promise<Uint8Array> => {
          const req: Empty = new Empty();
          const writer: BufferWriter | Writer = Writer.create();
          return this.client.postWithToken("/user.MeService/GetAsset", token, Empty.encode(req, writer).finish());
        })
        .then((binary: Uint8Array): void => {
          const res: AssetResponse = AssetResponse.decode(binary);
          resolve(Asset.from(res));
        })
        .catch((error: Error): void => {
          reject(error);
        });
    });
  }
}

const createAssetAPI = (client: IApiClient): IAssetRepository => {
  return new AssetAPI(client);
};

export { createAssetAPI };