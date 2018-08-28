import {Action} from "redux";
import {Address} from "../../domain/model/address";

export enum AddressListActionType {
  REQUEST_GET_ADDRESS = "ADDRESS_LIST_REQUEST_GET_ADDRESS",
  CALLBACK_GET_ADDRESS = "ADDRESS_LIST_CALLBACK_GET_ADDRESS",
  REQUEST_DELETE_ADDRESS = "ADDRESS_LIST_REQUEST_DELETE_ADDRESS",
  CALLBACK_DELETE_ADDRESS = "ADDRESS_LIST_CALLBACK_DELETE_ADDRESS",
}

export interface IRequestGetAddressAction extends Action {
  type: AddressListActionType.REQUEST_GET_ADDRESS;
}

export interface ICallbackGetAddressAction extends Action {
  type: AddressListActionType.CALLBACK_GET_ADDRESS;
  isSuccess: boolean;
  items: Address[];
}

export interface IRequestDeleteAddressAction extends Action {
  type: AddressListActionType.REQUEST_DELETE_ADDRESS;
  item: Address;
}

export interface ICallbackDeleteAddressAction extends Action {
  type: AddressListActionType.CALLBACK_DELETE_ADDRESS;
  isSuccess: boolean;
}

export type AddressListAction =
  IRequestGetAddressAction |
  ICallbackGetAddressAction |
  IRequestDeleteAddressAction |
  ICallbackDeleteAddressAction;

export interface IAddressListActionCreator {
  requestGetAddressAction(): IRequestGetAddressAction;

  callbackGetAddressAction(isSuccess: boolean, items: Address[]): ICallbackGetAddressAction;

  requestDeleteAddressAction(item: Address): IRequestDeleteAddressAction;

  callbackDeleteAddressAction(isSuccess: boolean): ICallbackDeleteAddressAction;
}

class ActionCreator implements IAddressListActionCreator {
  public requestGetAddressAction(): IRequestGetAddressAction {
    return {
      type: AddressListActionType.REQUEST_GET_ADDRESS,
    };
  }

  public callbackGetAddressAction = (isSuccess: boolean, items: Address[]): ICallbackGetAddressAction => {
    return {
      type: AddressListActionType.CALLBACK_GET_ADDRESS,
      isSuccess,
      items,
    };
  }

  public requestDeleteAddressAction = (item: Address): IRequestDeleteAddressAction => {
    return {
      type: AddressListActionType.REQUEST_DELETE_ADDRESS,
      item,
    };
  }

  public callbackDeleteAddressAction = (isSuccess: boolean): ICallbackDeleteAddressAction => {
    return {
      type: AddressListActionType.CALLBACK_DELETE_ADDRESS,
      isSuccess,
    };
  }
}

export const createAddressListActionCreator = (): IAddressListActionCreator => {
  return new ActionCreator();
};