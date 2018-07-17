import {Action} from "redux";
import {Currency} from "../../domain/model/currency";
import {Asset} from "../../domain/model/asset";

export enum MenuActionType {
  REQUEST_GET_ASSET = "REQUEST_GET_ASSET",
  CALLBACK_GET_ASSET = "CALLBACK_GET_ASSET",
}

export interface IRequestGetAssetAction extends Action {
  type: MenuActionType.REQUEST_GET_ASSET;
}

export interface ICallbackGetAssetAction extends Action {
  type: MenuActionType.CALLBACK_GET_ASSET;
  isSuccess: boolean;
  item: Asset | null;
}

export type MenuAction =
  IRequestGetAssetAction |
  ICallbackGetAssetAction;

export interface IMenuActionCreator {
  requestGetAssetAction(): IRequestGetAssetAction;
  callbackGetAssetAction(isSuccess: boolean, item: Asset | null): ICallbackGetAssetAction;
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
}

export const createMenuActionCreator = (): IMenuActionCreator => {
  return new ActionCreator();
};