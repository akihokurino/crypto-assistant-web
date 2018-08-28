import {Action} from "redux";
import {User} from "../../domain/model/user";

export enum LayoutActionType {
  CALLBACK_SIGN_UP = "LAYOUT_CALLBACK_SIGN_UP",
  CALLBACK_SIGN_IN = "LAYOUT_CALLBACK_SIGN_IN",

  REQUEST_SIGN_OUT = "LAYOUT_REQUEST_SIGN_OUT",
  CALLBACK_SIGN_OUT = "LAYOUT_CALLBACK_SIGN_OUT",

  REQUEST_GET_LOGIN_USER = "LAYOUT_REQUEST_GET_LOGIN_USER",
  CALLBACK_GET_LOGIN_USER = "LAYOUT_CALLBACK_GET_LOGIN_USER",
}

export interface ICallbackSignUpAction extends Action {
  type: LayoutActionType.CALLBACK_SIGN_UP;
  isSuccess: boolean;
  item: User | null;
}

export interface ICallbackSignInAction extends Action {
  type: LayoutActionType.CALLBACK_SIGN_IN;
  isSuccess: boolean;
  item: User | null;
}

export interface IRequestSignOutAction extends Action {
  type: LayoutActionType.REQUEST_SIGN_OUT;
}

export interface ICallbackSignOutAction extends Action {
  type: LayoutActionType.CALLBACK_SIGN_OUT;
  isSuccess: boolean;
}

export interface IRequestGetLoginUserAction extends Action {
  type: LayoutActionType.REQUEST_GET_LOGIN_USER;
}

export interface ICallbackGetLoginUserAction extends Action {
  type: LayoutActionType.CALLBACK_GET_LOGIN_USER;
  item: User | null;
}

export type LayoutAction =
  ICallbackSignUpAction |
  ICallbackSignInAction |
  IRequestSignOutAction |
  ICallbackSignOutAction |
  IRequestGetLoginUserAction |
  ICallbackGetLoginUserAction;

export interface ILayoutActionCreator {
  callbackSignUpAction(isSuccess: boolean, item: User): ICallbackSignUpAction;

  callbackSignInAction(isSuccess: boolean, item: User): ICallbackSignInAction;

  requestSignOutAction(): IRequestSignOutAction;

  callbackSignOutAction(isSuccess: boolean): ICallbackSignOutAction;

  requestGetLoginUserAction(): IRequestGetLoginUserAction;

  callbackGetLoginUserAction(item: User | null): ICallbackGetLoginUserAction;
}

class ActionCreator implements ILayoutActionCreator {
  public callbackSignUpAction = (isSuccess: boolean, item: User): ICallbackSignUpAction => {
    return {
      type: LayoutActionType.CALLBACK_SIGN_UP,
      isSuccess,
      item,
    };
  }

  public callbackSignInAction = (isSuccess: boolean, item: User): ICallbackSignInAction => {
    return {
      type: LayoutActionType.CALLBACK_SIGN_IN,
      isSuccess,
      item,
    };
  }

  public requestSignOutAction = (): IRequestSignOutAction => {
    return {
      type: LayoutActionType.REQUEST_SIGN_OUT,
    };
  }

  public callbackSignOutAction = (isSuccess: boolean): ICallbackSignOutAction => {
    return {
      type: LayoutActionType.CALLBACK_SIGN_OUT,
      isSuccess,
    };
  }

  public requestGetLoginUserAction = (): IRequestGetLoginUserAction => {
    return {
      type: LayoutActionType.REQUEST_GET_LOGIN_USER,
    };
  }

  public callbackGetLoginUserAction = (item: User | null): ICallbackGetLoginUserAction => {
    return {
      type: LayoutActionType.CALLBACK_GET_LOGIN_USER,
      item,
    };
  }
}

export const createLayoutActionCreator = (): ILayoutActionCreator => {
  return new ActionCreator();
};