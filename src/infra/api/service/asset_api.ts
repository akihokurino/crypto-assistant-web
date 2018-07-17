import {IApiClient} from "../client";
import {common, user} from "../rpc/api";
import {Writer} from "protobufjs";
import {IAssetRepository} from "../../../domain/repository/asset_repository";
import {Asset} from "../../../domain/model/asset";
import Empty = common.Empty;
import AssetResponse = user.AssetResponse;
import * as firebase from "firebase";

class AssetAPI implements IAssetRepository {

  constructor(readonly client: IApiClient) {

  }

  public get(): Promise<Asset> {
    return new Promise<Asset>((resolve, reject) => {
      this.getToken()
        .then((token: string) => {
          const req = new Empty();
          const writer = Writer.create();
          return this.client.postWithToken("/user.MeService/GetAsset", token, Empty.encode(req, writer).finish());
        })
        .then((binary: Uint8Array) => {
          const res: AssetResponse = AssetResponse.decode(binary);
          resolve(Asset.from(res));
        })
        .catch((error: Error) => {
          reject(error);
        });
    });
  }

  private getToken = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const authUser: firebase.User | null = firebase.auth().currentUser;
      if (authUser) {
        authUser.getIdToken(true).then((token: string) => {
          resolve(token);
        })
          .catch((error: Error) => {
            reject(error);
          });
      } else {
        reject(new Error(""));
      }
    });
  }
}

const createAssetAPI = (client: IApiClient): IAssetRepository => {
  return new AssetAPI(client);
};

export { createAssetAPI };