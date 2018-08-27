import {Action} from "redux";
import {Asset} from "../../domain/model/asset";

export enum MyPageActionType {
  REQUEST_GET_ASSET = "MY_PAGE_REQUEST_GET_ASSET",
  CALLBACK_GET_ASSET = "MY_PAGE_CALLBACK_GET_ASSET",
}

export interface IRequestGetAssetAction extends Action {
  type: MyPageActionType.REQUEST_GET_ASSET;
}

export interface ICallbackGetAssetAction extends Action {
  type: MyPageActionType.CALLBACK_GET_ASSET;
  isSuccess: boolean;
  item: Asset | null;
}

export type MyPageAction =
  IRequestGetAssetAction |
  ICallbackGetAssetAction;

export interface IMyPageActionCreator {
  requestGetAssetAction(): IRequestGetAssetAction;

  callbackGetAssetAction(isSuccess: boolean, item: Asset | null): ICallbackGetAssetAction;
}

class ActionCreator implements IMyPageActionCreator {
  public requestGetAssetAction(): IRequestGetAssetAction {
    return {
      type: MyPageActionType.REQUEST_GET_ASSET,
    };
  }

  public callbackGetAssetAction(isSuccess: boolean, item: Asset | null): ICallbackGetAssetAction {
    return {
      type: MyPageActionType.CALLBACK_GET_ASSET,
      isSuccess,
      item,
    };
  }
}

export const createMyPageActionCreator = (): IMyPageActionCreator => {
  return new ActionCreator();
};