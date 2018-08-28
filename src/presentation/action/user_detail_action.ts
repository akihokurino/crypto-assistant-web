import {Action} from "redux";
import {Portfolio} from "../../domain/model/portfolio";
import {User} from "../../domain/model/user";

export enum UserDetailActionType {
  REQUEST_GET_USER = "USER_DETAIL_REQUEST_GET_USER",
  CALLBACK_GET_USER = "USER_DETAIL_CALLBACK_GET_USER",
  REQUEST_GET_PORTFOLIO = "USER_DETAIL_REQUEST_GET_PORTFOLIO",
  CALLBACK_GET_PORTFOLIO = "USER_DETAIL_REQUEST_GET_PORTFOLIO",
}

export interface IRequestGetUserAction extends Action {
  type: UserDetailActionType.REQUEST_GET_USER;
  userId: string;
}

export interface ICallbackGetUserAction extends Action {
  type: UserDetailActionType.CALLBACK_GET_USER;
  isSuccess: boolean;
  item: User | null;
}

export interface IRequestGetPortfolioAction extends Action {
  type: UserDetailActionType.REQUEST_GET_PORTFOLIO;
  userId: string;
}

export interface ICallbackGetPortfolioAction extends Action {
  type: UserDetailActionType.CALLBACK_GET_PORTFOLIO;
  isSuccess: boolean;
  items: Portfolio[];
}

export type UserDetailAction =
  IRequestGetUserAction |
  ICallbackGetUserAction |
  IRequestGetPortfolioAction |
  ICallbackGetPortfolioAction;

export interface IUserDetailActionCreator {
  requestGetUserAction(userId: string): IRequestGetUserAction;

  callbackGetUserAction(isSuccess: boolean, item: User | null): ICallbackGetUserAction;

  requestGetPortfolioAction(userId: string): IRequestGetPortfolioAction;

  callbackGetPortfolioAction(isSuccess: boolean, items: Portfolio[]): ICallbackGetPortfolioAction;
}

class ActionCreator implements IUserDetailActionCreator {
  public requestGetUserAction = (userId: string): IRequestGetUserAction => {
    return {
      type: UserDetailActionType.REQUEST_GET_USER,
      userId,
    };
  }

  public callbackGetUserAction = (isSuccess: boolean, item: User | null): ICallbackGetUserAction => {
    return {
      type: UserDetailActionType.CALLBACK_GET_USER,
      isSuccess,
      item,
    };
  }

  public requestGetPortfolioAction = (userId: string): IRequestGetPortfolioAction => {
    return {
      type: UserDetailActionType.REQUEST_GET_PORTFOLIO,
      userId,
    };
  }

  public callbackGetPortfolioAction = (isSuccess: boolean, items: Portfolio[]): ICallbackGetPortfolioAction => {
    return {
      type: UserDetailActionType.CALLBACK_GET_PORTFOLIO,
      isSuccess,
      items,
    };
  }
}

export const createUserDetailActionCreator = (): IUserDetailActionCreator => {
  return new ActionCreator();
};