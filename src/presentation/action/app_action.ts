import {Action} from "redux";
import {User} from "../../domain/model/user";

export enum AppActionType {
  REQUEST_SIGN_UP = "APP_REQUEST_SIGN_UP",
  CALLBACK_SIGN_UP = "APP_CALLBACK_SIGN_UP",
  REQUEST_SIGN_IN = "APP_REQUEST_SIGN_IN",
  CALLBACK_SIGN_IN = "APP_CALLBACK_SIGN_IN",
  REQUEST_SIGN_OUT = "APP_REQUEST_SIGN_OUT",
  CALLBACK_SIGN_OUT = "APP_CALLBACK_SIGN_OUT",

  REQUEST_GET_LOGIN_USER = "APP_REQUEST_GET_LOGIN_USER",
  CALLBACK_GET_LOGIN_USER = "APP_CALLBACK_GET_LOGIN_USER",
}

export interface IRequestSignUpAction extends Action {
  type: AppActionType.REQUEST_SIGN_UP;
  username: string;
  email: string;
  password: string;
}

export interface ICallbackSignUpAction extends Action {
  type: AppActionType.CALLBACK_SIGN_UP;
  isSuccess: boolean;
  item: User | null;
}

export interface IRequestSignInAction extends Action {
  type: AppActionType.REQUEST_SIGN_IN;
  email: string;
  password: string;
}

export interface ICallbackSignInAction extends Action {
  type: AppActionType.CALLBACK_SIGN_IN;
  isSuccess: boolean;
  item: User | null;
}

export interface IRequestSignOutAction extends Action {
  type: AppActionType.REQUEST_SIGN_OUT;
}

export interface ICallbackSignOutAction extends Action {
  type: AppActionType.CALLBACK_SIGN_OUT;
  isSuccess: boolean;
}

export interface IRequestGetLoginUserAction extends Action {
  type: AppActionType.REQUEST_GET_LOGIN_USER;
}

export interface ICallbackGetLoginUserAction extends Action {
  type: AppActionType.CALLBACK_GET_LOGIN_USER;
  item: User | null;
}

export type AppAction =
  IRequestSignUpAction |
  ICallbackSignUpAction |
  IRequestSignInAction |
  ICallbackSignInAction |
  IRequestSignOutAction |
  ICallbackSignOutAction |
  IRequestGetLoginUserAction |
  ICallbackGetLoginUserAction;

export interface IAppActionCreator {
  requestSignUpAction(username: string, email: string, password: string): IRequestSignUpAction;
  callbackSignUpAction(isSuccess: boolean, item: User): ICallbackSignUpAction;
  requestSignInAction(email: string, password: string): IRequestSignInAction;
  callbackSignInAction(isSuccess: boolean, item: User): ICallbackSignInAction;
  requestSignOutAction(): IRequestSignOutAction;
  callbackSignOutAction(isSuccess: boolean): ICallbackSignOutAction;
  requestGetLoginUserAction(): IRequestGetLoginUserAction;
  callbackGetLoginUserAction(item: User | null): ICallbackGetLoginUserAction;
}

class ActionCreator implements IAppActionCreator {
  public requestSignUpAction(username: string, email: string, password: string): IRequestSignUpAction {
    return {
      type: AppActionType.REQUEST_SIGN_UP,
      username,
      email,
      password,
    };
  }

  public callbackSignUpAction(isSuccess: boolean, item: User): ICallbackSignUpAction {
    return {
      type: AppActionType.CALLBACK_SIGN_UP,
      isSuccess,
      item,
    };
  }

  public requestSignInAction(email: string, password: string): IRequestSignInAction {
    return {
      type: AppActionType.REQUEST_SIGN_IN,
      email,
      password,
    };
  }

  public callbackSignInAction(isSuccess: boolean, item: User): ICallbackSignInAction {
    return {
      type: AppActionType.CALLBACK_SIGN_IN,
      isSuccess,
      item,
    };
  }

  public requestSignOutAction(): IRequestSignOutAction {
    return {
      type: AppActionType.REQUEST_SIGN_OUT,
    };
  }

  public callbackSignOutAction(isSuccess: boolean): ICallbackSignOutAction {
    return {
      type: AppActionType.CALLBACK_SIGN_OUT,
      isSuccess,
    };
  }

  public requestGetLoginUserAction(): IRequestGetLoginUserAction {
    return {
      type: AppActionType.REQUEST_GET_LOGIN_USER,
    };
  }

  public callbackGetLoginUserAction(item: User | null): ICallbackGetLoginUserAction {
    return {
      type: AppActionType.CALLBACK_GET_LOGIN_USER,
      item,
    };
  }
}

export const createAppActionCreator = (): IAppActionCreator => {
  return new ActionCreator();
};