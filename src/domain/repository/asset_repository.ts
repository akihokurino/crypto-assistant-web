import {Asset} from "../model/asset";

export interface IAssetRepository {
  get(): Promise<Asset>;
}