import {Action} from "redux";
import {Currency} from "../../domain/model/currency";

export enum TopActionType {
  REQUEST_GET_ALL_CURRENCY = "REQUEST_GET_ALL_CURRENCY",
  CALLBACK_GET_ALL_CURRENCY = "CALLBACK_GET_ALL_CURRENCY",
}

export interface IRequestGetAllCurrencyAction extends Action {
  type: TopActionType.REQUEST_GET_ALL_CURRENCY;
}

export interface ICallbackGetAllCurrencyAction extends Action {
  type: TopActionType.CALLBACK_GET_ALL_CURRENCY;
  isSuccess: boolean;
  items: Currency[];
}

export type TopAction =
  IRequestGetAllCurrencyAction |
  ICallbackGetAllCurrencyAction;

export interface ITopActionCreator {
  requestGetAllCurrencyAction(): IRequestGetAllCurrencyAction;
  callbackGetAllCurrencyAction(isSuccess: boolean, items: Currency[]): ICallbackGetAllCurrencyAction;
}

class ActionCreator implements ITopActionCreator {
  public requestGetAllCurrencyAction(): IRequestGetAllCurrencyAction {
    return {
      type: TopActionType.REQUEST_GET_ALL_CURRENCY,
    };
  }

  public callbackGetAllCurrencyAction(isSuccess: boolean, items: Currency[]): ICallbackGetAllCurrencyAction {
    return {
      type: TopActionType.CALLBACK_GET_ALL_CURRENCY,
      isSuccess,
      items,
    };
  }
}

export const createTopActionCreator = (): ITopActionCreator => {
  return new ActionCreator();
};