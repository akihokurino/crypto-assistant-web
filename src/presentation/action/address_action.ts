import {Action} from "redux";
import {Address} from "../../domain/model/address";

export enum AddressesActionType {
  REQUEST_GET_ADDRESS = "ADDRESSES_REQUEST_GET_ADDRESS",
  CALLBACK_GET_ADDRESS = "ADDRESSES_CALLBACK_GET_ADDRESS",
  REQUEST_DELETE_ADDRESS = "ADDRESSES_REQUEST_DELETE_ADDRESS",
  CALLBACK_DELETE_ADDRESS = "ADDRESSES_CALLBACK_DELETE_ADDRESS",
}

export interface IRequestGetAddressAction extends Action {
  type: AddressesActionType.REQUEST_GET_ADDRESS;
}

export interface ICallbackGetAddressAction extends Action {
  type: AddressesActionType.CALLBACK_GET_ADDRESS;
  isSuccess: boolean;
  items: Address[];
}

export interface IRequestDeleteAddressAction extends Action {
  type: AddressesActionType.REQUEST_DELETE_ADDRESS;
  item: Address;
}

export interface ICallbackDeleteAddressAction extends Action {
  type: AddressesActionType.CALLBACK_DELETE_ADDRESS;
  isSuccess: boolean;
}

export type AddressesAction =
  IRequestGetAddressAction |
  ICallbackGetAddressAction |
  IRequestDeleteAddressAction |
  ICallbackDeleteAddressAction;

export interface IAddressesActionCreator {
  requestGetAddressAction(): IRequestGetAddressAction;

  callbackGetAddressAction(isSuccess: boolean, items: Address[]): ICallbackGetAddressAction;

  requestDeleteAddressAction(item: Address): IRequestDeleteAddressAction;

  callbackDeleteAddressAction(isSuccess: boolean): ICallbackDeleteAddressAction;
}

class ActionCreator implements IAddressesActionCreator {
  public requestGetAddressAction(): IRequestGetAddressAction {
    return {
      type: AddressesActionType.REQUEST_GET_ADDRESS,
    };
  }

  public callbackGetAddressAction(isSuccess: boolean, items: Address[]): ICallbackGetAddressAction {
    return {
      type: AddressesActionType.CALLBACK_GET_ADDRESS,
      isSuccess,
      items,
    };
  }

  public requestDeleteAddressAction(item: Address): IRequestDeleteAddressAction {
    return {
      type: AddressesActionType.REQUEST_DELETE_ADDRESS,
      item,
    };
  }

  public callbackDeleteAddressAction(isSuccess: boolean): ICallbackDeleteAddressAction {
    return {
      type: AddressesActionType.CALLBACK_DELETE_ADDRESS,
      isSuccess,
    };
  }
}

export const createAddressesActionCreator = (): IAddressesActionCreator => {
  return new ActionCreator();
};