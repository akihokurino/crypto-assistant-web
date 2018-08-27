import {Action} from "redux";
import {Portfolio} from "../../domain/model/portfolio";
import {User} from "../../domain/model/user";

export enum UserActionType {
  REQUEST_GET_USER = "USER_REQUEST_GET_USER",
  CALLBACK_GET_USER = "USER_CALLBACK_GET_USER",
  REQUEST_GET_PORTFOLIO = "USER_REQUEST_GET_PORTFOLIO",
  CALLBACK_GET_PORTFOLIO = "USER_REQUEST_GET_PORTFOLIO",
}

export interface IRequestGetUserAction extends Action {
  type: UserActionType.REQUEST_GET_USER;
  userId: string;
}

export interface ICallbackGetUserAction extends Action {
  type: UserActionType.CALLBACK_GET_USER;
  isSuccess: boolean;
  item: User | null;
}

export interface IRequestGetPortfolioAction extends Action {
  type: UserActionType.REQUEST_GET_PORTFOLIO;
  userId: string;
}

export interface ICallbackGetPortfolioAction extends Action {
  type: UserActionType.CALLBACK_GET_PORTFOLIO;
  isSuccess: boolean;
  items: Portfolio[];
}

export type UserAction =
  IRequestGetUserAction |
  ICallbackGetUserAction |
  IRequestGetPortfolioAction |
  ICallbackGetPortfolioAction;

export interface IUserActionCreator {
  requestGetUserAction(userId: string): IRequestGetUserAction;

  callbackGetUserAction(isSuccess: boolean, item: User | null): ICallbackGetUserAction;

  requestGetPortfolioAction(userId: string): IRequestGetPortfolioAction;

  callbackGetPortfolioAction(isSuccess: boolean, items: Portfolio[]): ICallbackGetPortfolioAction;
}

class ActionCreator implements IUserActionCreator {
  public requestGetUserAction = (userId: string): IRequestGetUserAction => {
    return {
      type: UserActionType.REQUEST_GET_USER,
      userId,
    };
  }

  public callbackGetUserAction = (isSuccess: boolean, item: User | null): ICallbackGetUserAction => {
    return {
      type: UserActionType.CALLBACK_GET_USER,
      isSuccess,
      item,
    };
  }

  public requestGetPortfolioAction = (userId: string): IRequestGetPortfolioAction => {
    return {
      type: UserActionType.REQUEST_GET_PORTFOLIO,
      userId,
    };
  }

  public callbackGetPortfolioAction = (isSuccess: boolean, items: Portfolio[]): ICallbackGetPortfolioAction => {
    return {
      type: UserActionType.CALLBACK_GET_PORTFOLIO,
      isSuccess,
      items,
    };
  }
}

export const createUserActionCreator = (): IUserActionCreator => {
  return new ActionCreator();
};