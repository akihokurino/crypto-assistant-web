import {Action} from "redux";
import {User} from "../../domain/model/user";

export enum AppActionType {
  REQUEST_SIGN_UP = "REQUEST_SIGN_UP",
  SUCCESS_SIGN_UP = "SUCCESS_SIGN_UP",
  ERROR_SIGN_UP = "ERROR_SIGN_UP",
}

export interface IRequestSignUpAction extends Action {
  type: AppActionType.REQUEST_SIGN_UP;
  username: string;
  email: string;
  password: string;
}

export interface ISuccessSignUpAction extends Action {
  type: AppActionType.SUCCESS_SIGN_UP;
  item: User;
}

export interface IErrorSignUpAction extends Action {
  type: AppActionType.ERROR_SIGN_UP;
}

export type AppAction =
  IRequestSignUpAction |
  ISuccessSignUpAction |
  IErrorSignUpAction;

export interface IAppActionCreator {
  requestSignUpAction(username: string, email: string, password: string): IRequestSignUpAction;
  successSignUpAction(item: User): ISuccessSignUpAction;
  errorSignUpAction(): IErrorSignUpAction;
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

  public successSignUpAction(item: User): ISuccessSignUpAction {
    return {
      type: AppActionType.SUCCESS_SIGN_UP,
      item,
    };
  }

  public errorSignUpAction(): IErrorSignUpAction {
    return {
      type: AppActionType.ERROR_SIGN_UP,
    };
  }
}

export const createAppActionCreator = (): IAppActionCreator => {
  return new ActionCreator();
};