import {Action} from "redux";
import {Currency} from "../../domain/model/currency";
import {Address} from "../../domain/model/address";

export enum RegisterAddressActionType {
  REQUEST_GET_ALL_CURRENCY = "REGISTER_ADDRESS_REQUEST_GET_ALL_CURRENCY",
  CALLBACK_GET_ALL_CURRENCY = "REGISTER_ADDRESS_CALLBACK_GET_ALL_CURRENCY",
  REQUEST_CREATE_ADDRESS = "REGISTER_ADDRESS_REQUEST_CREATE_ADDRESS",
  CALLBACK_CREATE_ADDRESS = "REGISTER_ADDRESS_CALLBACK_CREATE_ADDRESS",
}

export interface IRequestGetAllCurrencyAction extends Action {
  type: RegisterAddressActionType.REQUEST_GET_ALL_CURRENCY;
}

export interface ICallbackGetAllCurrencyAction extends Action {
  type: RegisterAddressActionType.CALLBACK_GET_ALL_CURRENCY;
  isSuccess: boolean;
  items: Currency[];
}

export interface IRequestCreateAddressAction extends Action {
  type: RegisterAddressActionType.REQUEST_CREATE_ADDRESS;
  item: Address;
}

export interface ICallbackCreateAddressAction extends Action {
  type: RegisterAddressActionType.CALLBACK_CREATE_ADDRESS;
  isSuccess: boolean;
  item: Address;
}

export type RegisterAddressAction =
  IRequestGetAllCurrencyAction |
  ICallbackGetAllCurrencyAction |
  IRequestCreateAddressAction |
  ICallbackCreateAddressAction;

export interface IRegisterAddressActionCreator {
  requestGetAllCurrencyAction(): IRequestGetAllCurrencyAction;

  callbackGetAllCurrencyAction(isSuccess: boolean, items: Currency[]): ICallbackGetAllCurrencyAction;

  requestCreateAddressAction(item: Address): IRequestCreateAddressAction;

  callbackCreateAddressAction(isSuccess: boolean, item: Address): ICallbackCreateAddressAction;
}

class ActionCreator implements IRegisterAddressActionCreator {
  public requestGetAllCurrencyAction = (): IRequestGetAllCurrencyAction => {
    return {
      type: RegisterAddressActionType.REQUEST_GET_ALL_CURRENCY,
    };
  }

  public callbackGetAllCurrencyAction = (isSuccess: boolean, items: Currency[]): ICallbackGetAllCurrencyAction => {
    return {
      type: RegisterAddressActionType.CALLBACK_GET_ALL_CURRENCY,
      isSuccess,
      items,
    };
  }

  public requestCreateAddressAction = (item: Address): IRequestCreateAddressAction => {
    return {
      type: RegisterAddressActionType.REQUEST_CREATE_ADDRESS,
      item,
    };
  }

  public callbackCreateAddressAction = (isSuccess: boolean, item: Address): ICallbackCreateAddressAction => {
    return {
      type: RegisterAddressActionType.CALLBACK_CREATE_ADDRESS,
      isSuccess,
      item,
    };
  }
}

export const createRegisterAddressActionCreator = (): IRegisterAddressActionCreator => {
  return new ActionCreator();
};