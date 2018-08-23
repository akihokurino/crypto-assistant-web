import {Action} from "redux";
import {User} from "../../domain/model/user";

export enum AuthActionType {
  REQUEST_SIGN_UP = "AUTH_REQUEST_SIGN_UP",
  CALLBACK_SIGN_UP = "AUTH_CALLBACK_SIGN_UP",
  REQUEST_SIGN_IN = "AUTH_REQUEST_SIGN_IN",
  CALLBACK_SIGN_IN = "AUTH_CALLBACK_SIGN_IN",
}

export interface IRequestSignUpAction extends Action {
  type: AuthActionType.REQUEST_SIGN_UP;
  username: string;
  email: string;
  password: string;
}

export interface ICallbackSignUpAction extends Action {
  type: AuthActionType.CALLBACK_SIGN_UP;
  isSuccess: boolean;
  item: User | null;
}

export interface IRequestSignInAction extends Action {
  type: AuthActionType.REQUEST_SIGN_IN;
  email: string;
  password: string;
}

export interface ICallbackSignInAction extends Action {
  type: AuthActionType.CALLBACK_SIGN_IN;
  isSuccess: boolean;
  item: User | null;
}

export type AuthAction =
  IRequestSignUpAction |
  ICallbackSignUpAction |
  IRequestSignInAction |
  ICallbackSignInAction;

export interface IAuthActionCreator {
  requestSignUpAction(username: string, email: string, password: string): IRequestSignUpAction;

  callbackSignUpAction(isSuccess: boolean, item: User): ICallbackSignUpAction;

  requestSignInAction(email: string, password: string): IRequestSignInAction;

  callbackSignInAction(isSuccess: boolean, item: User): ICallbackSignInAction;
}

class ActionCreator implements IAuthActionCreator {
  public requestSignUpAction(username: string, email: string, password: string): IRequestSignUpAction {
    return {
      type: AuthActionType.REQUEST_SIGN_UP,
      username,
      email,
      password,
    };
  }

  public callbackSignUpAction(isSuccess: boolean, item: User): ICallbackSignUpAction {
    return {
      type: AuthActionType.CALLBACK_SIGN_UP,
      isSuccess,
      item,
    };
  }

  public requestSignInAction(email: string, password: string): IRequestSignInAction {
    return {
      type: AuthActionType.REQUEST_SIGN_IN,
      email,
      password,
    };
  }

  public callbackSignInAction(isSuccess: boolean, item: User): ICallbackSignInAction {
    return {
      type: AuthActionType.CALLBACK_SIGN_IN,
      isSuccess,
      item,
    };
  }
}

export const createAuthActionCreator = (): IAuthActionCreator => {
  return new ActionCreator();
};