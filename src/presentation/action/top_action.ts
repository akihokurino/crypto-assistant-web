import {Action} from "redux";
import {Currency} from "../../domain/model/currency";
import {Portfolio} from "../../domain/model/portfolio";

export enum TopActionType {
  REQUEST_GET_ALL_CURRENCY = "TOP_REQUEST_GET_ALL_CURRENCY",
  CALLBACK_GET_ALL_CURRENCY = "TOP_CALLBACK_GET_ALL_CURRENCY",
  REQUEST_GET_PORTFOLIO = "TOP_REQUEST_GET_PORTFOLIO",
  CALLBACK_GET_PORTFOLIO = "TOP_REQUEST_GET_PORTFOLIO",
}

export interface IRequestGetAllCurrencyAction extends Action {
  type: TopActionType.REQUEST_GET_ALL_CURRENCY;
}

export interface ICallbackGetAllCurrencyAction extends Action {
  type: TopActionType.CALLBACK_GET_ALL_CURRENCY;
  isSuccess: boolean;
  items: Currency[];
}

export interface IRequestGetPortfolioAction extends Action {
  type: TopActionType.REQUEST_GET_PORTFOLIO;
}

export interface ICallbackGetPortfolioAction extends Action {
  type: TopActionType.CALLBACK_GET_PORTFOLIO;
  isSuccess: boolean;
  items: Portfolio[];
}

export type TopAction =
  IRequestGetAllCurrencyAction |
  ICallbackGetAllCurrencyAction |
  IRequestGetPortfolioAction |
  ICallbackGetPortfolioAction;

export interface ITopActionCreator {
  requestGetAllCurrencyAction(): IRequestGetAllCurrencyAction;

  callbackGetAllCurrencyAction(isSuccess: boolean, items: Currency[]): ICallbackGetAllCurrencyAction;

  requestGetPortfolioAction(): IRequestGetPortfolioAction;

  callbackGetPortfolioAction(isSuccess: boolean, items: Portfolio[]): ICallbackGetPortfolioAction;
}

class ActionCreator implements ITopActionCreator {
  public requestGetAllCurrencyAction = (): IRequestGetAllCurrencyAction => {
    return {
      type: TopActionType.REQUEST_GET_ALL_CURRENCY,
    };
  }

  public callbackGetAllCurrencyAction = (isSuccess: boolean, items: Currency[]): ICallbackGetAllCurrencyAction => {
    return {
      type: TopActionType.CALLBACK_GET_ALL_CURRENCY,
      isSuccess,
      items,
    };
  }

  public requestGetPortfolioAction = (): IRequestGetPortfolioAction => {
    return {
      type: TopActionType.REQUEST_GET_PORTFOLIO,
    };
  }

  public callbackGetPortfolioAction = (isSuccess: boolean, items: Portfolio[]): ICallbackGetPortfolioAction => {
    return {
      type: TopActionType.CALLBACK_GET_PORTFOLIO,
      isSuccess,
      items,
    };
  }
}

export const createTopActionCreator = (): ITopActionCreator => {
  return new ActionCreator();
};