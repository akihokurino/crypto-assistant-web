import {Action} from "redux";
import {Currency} from "../../domain/model/currency";
import {Asset} from "../../domain/model/asset";
import {Address} from "../../domain/model/address";

export enum MenuActionType {
  REQUEST_GET_ASSET = "REQUEST_GET_ASSET",
  CALLBACK_GET_ASSET = "CALLBACK_GET_ASSET",
  REQUEST_GET_ADDRESS = "REQUEST_GET_ADDRESS",
  CALLBACK_GET_ADDRESS = "CALLBACK_GET_ADDRESS",
}

export interface IRequestGetAssetAction extends Action {
  type: MenuActionType.REQUEST_GET_ASSET;
}

export interface ICallbackGetAssetAction extends Action {
  type: MenuActionType.CALLBACK_GET_ASSET;
  isSuccess: boolean;
  item: Asset | null;
}

export interface IRequestGetAddressAction extends Action {
  type: MenuActionType.REQUEST_GET_ADDRESS;
}

export interface ICallbackGetAddressAction extends Action {
  type: MenuActionType.CALLBACK_GET_ADDRESS;
  isSuccess: boolean;
  items: Address[];
}

export type MenuAction =
  IRequestGetAssetAction |
  ICallbackGetAssetAction |
  IRequestGetAddressAction |
  ICallbackGetAddressAction;

export interface IMenuActionCreator {
  requestGetAssetAction(): IRequestGetAssetAction;
  callbackGetAssetAction(isSuccess: boolean, item: Asset | null): ICallbackGetAssetAction;
  requestGetAddressAction(): IRequestGetAddressAction;
  callbackGetAddressAction(isSuccess: boolean, items: Address[]): ICallbackGetAddressAction;
}

class ActionCreator implements IMenuActionCreator {
  public requestGetAssetAction(): IRequestGetAssetAction {
    return {
      type: MenuActionType.REQUEST_GET_ASSET,
    };
  }

  public callbackGetAssetAction(isSuccess: boolean, item: Asset | null): ICallbackGetAssetAction {
    return {
      type: MenuActionType.CALLBACK_GET_ASSET,
      isSuccess,
      item,
    };
  }

  public requestGetAddressAction(): IRequestGetAddressAction {
    return {
      type: MenuActionType.REQUEST_GET_ADDRESS,
    };
  }

  public callbackGetAddressAction(isSuccess: boolean, items: Address[]): ICallbackGetAddressAction {
    return {
      type: MenuActionType.CALLBACK_GET_ADDRESS,
      isSuccess,
      items,
    };
  }
}

export const createMenuActionCreator = (): IMenuActionCreator => {
  return new ActionCreator();
};