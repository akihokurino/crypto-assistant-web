import {Asset} from "../../domain/model/asset";
import {Address} from "../../domain/model/address";

export type MenuState = {
  asset: Asset | null,
  addresses: Address[] | null,
};