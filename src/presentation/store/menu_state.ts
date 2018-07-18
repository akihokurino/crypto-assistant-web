import {Asset} from "../../domain/model/asset";
import {Address} from "../../domain/model/address";
import {Currency} from "../../domain/model/currency";

export type MenuState = {
  asset: Asset | null,
  addresses: Address[] | null,
  currencies: Currency[],
};