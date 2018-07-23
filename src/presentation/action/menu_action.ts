import {Action} from "redux";
import {Currency} from "../../domain/model/currency";
import {Asset} from "../../domain/model/asset";
import {Address} from "../../domain/model/address";

export enum MenuActionType {
  REQUEST_GET_ASSET = "MENU_REQUEST_GET_ASSET",
  CALLBACK_GET_ASSET = "MENU_CALLBACK_GET_ASSET",
  REQUEST_GET_ADDRESS = "MENU_REQUEST_GET_ADDRESS",
  CALLBACK_GET_ADDRESS = "MENU_CALLBACK_GET_ADDRESS",
  REQUEST_GET_ALL_CURRENCY = "MENU_REQUEST_GET_ALL_CURRENCY",
  CALLBACK_GET_ALL_CURRENCY = "MENU_CALLBACK_GET_ALL_CURRENCY",
  REQUEST_CREATE_ADDRESS = "REQUEST_CREATE_ADDRESS",
  CALLBACK_CREATE_ADDRESS = "CALLBACK_CREATE_ADDRESS",
  REQUEST_DELETE_ADDRESS = "REQUEST_DELETE_ADDRESS",
  CALLBACK_DELETE_ADDRESS = "CALLBACK_DELETE_ADDRESS",
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

export interface IRequestGetAllCurrencyAction extends Action {
  type: MenuActionType.REQUEST_GET_ALL_CURRENCY;
}

export interface ICallbackGetAllCurrencyAction extends Action {
  type: MenuActionType.CALLBACK_GET_ALL_CURRENCY;
  isSuccess: boolean;
  items: Currency[];
}

export interface IRequestCreateAddressAction extends Action {
  type: MenuActionType.REQUEST_CREATE_ADDRESS;
  item: Address;
}

export interface ICallbackCreateAddressAction extends Action {
  type: MenuActionType.CALLBACK_CREATE_ADDRESS;
  isSuccess: boolean;
  item: Address;
}

export interface IRequestDeleteAddressAction extends Action {
  type: MenuActionType.REQUEST_DELETE_ADDRESS;
  item: Address;
}

export interface ICallbackDeleteAddressAction extends Action {
  type: MenuActionType.CALLBACK_DELETE_ADDRESS;
  isSuccess: boolean;
}

export type MenuAction =
  IRequestGetAssetAction |
  ICallbackGetAssetAction |
  IRequestGetAddressAction |
  ICallbackGetAddressAction |
  IRequestGetAllCurrencyAction |
  ICallbackGetAllCurrencyAction |
  IRequestCreateAddressAction |
  ICallbackCreateAddressAction |
  IRequestDeleteAddressAction |
  ICallbackDeleteAddressAction;

export interface IMenuActionCreator {
  requestGetAssetAction(): IRequestGetAssetAction;

  callbackGetAssetAction(isSuccess: boolean, item: Asset | null): ICallbackGetAssetAction;

  requestGetAddressAction(): IRequestGetAddressAction;

  callbackGetAddressAction(isSuccess: boolean, items: Address[]): ICallbackGetAddressAction;

  requestGetAllCurrencyAction(): IRequestGetAllCurrencyAction;

  callbackGetAllCurrencyAction(isSuccess: boolean, items: Currency[]): ICallbackGetAllCurrencyAction;

  requestCreateAddressAction(item: Address): IRequestCreateAddressAction;

  callbackCreateAddressAction(isSuccess: boolean, item: Address): ICallbackCreateAddressAction;

  requestDeleteAddressAction(item: Address): IRequestDeleteAddressAction;

  callbackDeleteAddressAction(isSuccess: boolean): ICallbackDeleteAddressAction;
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

  public requestGetAllCurrencyAction(): IRequestGetAllCurrencyAction {
    return {
      type: MenuActionType.REQUEST_GET_ALL_CURRENCY,
    };
  }

  public callbackGetAllCurrencyAction(isSuccess: boolean, items: Currency[]): ICallbackGetAllCurrencyAction {
    return {
      type: MenuActionType.CALLBACK_GET_ALL_CURRENCY,
      isSuccess,
      items,
    };
  }

  public requestCreateAddressAction(item: Address): IRequestCreateAddressAction {
    return {
      type: MenuActionType.REQUEST_CREATE_ADDRESS,
      item,
    };
  }

  public callbackCreateAddressAction(isSuccess: boolean, item: Address): ICallbackCreateAddressAction {
    return {
      type: MenuActionType.CALLBACK_CREATE_ADDRESS,
      isSuccess,
      item,
    };
  }

  public requestDeleteAddressAction(item: Address): IRequestDeleteAddressAction {
    return {
      type: MenuActionType.REQUEST_DELETE_ADDRESS,
      item,
    };
  }

  public callbackDeleteAddressAction(isSuccess: boolean): ICallbackDeleteAddressAction {
    return {
      type: MenuActionType.CALLBACK_DELETE_ADDRESS,
      isSuccess,
    };
  }
}

export const createMenuActionCreator = (): IMenuActionCreator => {
  return new ActionCreator();
};