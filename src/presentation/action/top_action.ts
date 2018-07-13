import {Action} from "redux";
import {Currency} from "../../domain/model/currency";

export enum TopActionType {
  REQUEST_GET_ALL_CURRENCY = "REQUEST_GET_ALL_CURRENCY",
  SUCCESS_GET_ALL_CURRENCY = "SUCCESS_GET_ALL_CURRENCY",
  ERROR_GET_ALL_CURRENCY = "SUCCESS_GET_ALL_CURRENCY",
}

export interface IRequestGetAllCurrencyAction extends Action {
  type: TopActionType.REQUEST_GET_ALL_CURRENCY;
}

export interface ISuccessGetAllCurrencyAction extends Action {
  type: TopActionType.SUCCESS_GET_ALL_CURRENCY;
  items: Currency[];
}

export interface IErrorGetAllCurrencyAction extends Action {
  type: TopActionType.ERROR_GET_ALL_CURRENCY;
}

export type TopAction =
  IRequestGetAllCurrencyAction |
  ISuccessGetAllCurrencyAction |
  IErrorGetAllCurrencyAction;

export interface ITopActionCreator {
  requestGetAllCurrencyAction(): IRequestGetAllCurrencyAction;
  successGetAllCurrencyAction(items: Currency[]): ISuccessGetAllCurrencyAction;
  errorGetAllCurrencyAction(): IErrorGetAllCurrencyAction;
}

class ActionCreator implements ITopActionCreator {
  public requestGetAllCurrencyAction = (): IRequestGetAllCurrencyAction => ({
    type: TopActionType.REQUEST_GET_ALL_CURRENCY,
  })

  public successGetAllCurrencyAction = (items: Currency[]): ISuccessGetAllCurrencyAction => ({
    type: TopActionType.SUCCESS_GET_ALL_CURRENCY,
    items,
  })

  public errorGetAllCurrencyAction = (): IErrorGetAllCurrencyAction => ({
    type: TopActionType.ERROR_GET_ALL_CURRENCY,
  })
}

export const createActionCreator = (): ITopActionCreator => {
  return new ActionCreator();
};