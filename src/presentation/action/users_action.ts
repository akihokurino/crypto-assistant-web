import {Action} from "redux";
import {User} from "../../domain/model/user";

export enum UsersActionType {
  REQUEST_GET_ALL_USERS = "USERS_REQUEST_GET_ALL_USERS",
  CALLBACK_GET_ALL_USERS = "USERS_CALLBACK_GET_ALL_USERS",
}

export interface IRequestGetAllUsersAction extends Action {
  type: UsersActionType.REQUEST_GET_ALL_USERS;
}

export interface ICallbackGetAllUsersAction extends Action {
  type: UsersActionType.CALLBACK_GET_ALL_USERS;
  isSuccess: boolean;
  items: User[];
}

export type UsersAction = IRequestGetAllUsersAction | ICallbackGetAllUsersAction;

export interface IUsersActionCreator {
  requestGetAllUsersAction(): IRequestGetAllUsersAction;

  callbackGetAllUsersAction(isSuccess: boolean, items: User[]): ICallbackGetAllUsersAction;
}

class ActionCreator implements IUsersActionCreator {
  public requestGetAllUsersAction(): IRequestGetAllUsersAction {
    return {
      type: UsersActionType.REQUEST_GET_ALL_USERS,
    };
  }

  public callbackGetAllUsersAction(isSuccess: boolean, items: User[]): ICallbackGetAllUsersAction {
    return {
      type: UsersActionType.CALLBACK_GET_ALL_USERS,
      isSuccess,
      items,
    };
  }
}

export const createUsersActionCreator = (): IUsersActionCreator => {
  return new ActionCreator();
};