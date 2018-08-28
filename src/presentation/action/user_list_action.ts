import {Action} from "redux";
import {User} from "../../domain/model/user";

export enum UserListActionType {
  REQUEST_GET_ALL_USERS = "USERS_REQUEST_GET_ALL_USERS",
  CALLBACK_GET_ALL_USERS = "USERS_CALLBACK_GET_ALL_USERS",
}

export interface IRequestGetAllUsersAction extends Action {
  type: UserListActionType.REQUEST_GET_ALL_USERS;
}

export interface ICallbackGetAllUsersAction extends Action {
  type: UserListActionType.CALLBACK_GET_ALL_USERS;
  isSuccess: boolean;
  items: User[];
}

export type UserListAction = IRequestGetAllUsersAction | ICallbackGetAllUsersAction;

export interface IUserListActionCreator {
  requestGetAllUsersAction(): IRequestGetAllUsersAction;

  callbackGetAllUsersAction(isSuccess: boolean, items: User[]): ICallbackGetAllUsersAction;
}

class ActionCreator implements IUserListActionCreator {
  public requestGetAllUsersAction = (): IRequestGetAllUsersAction => {
    return {
      type: UserListActionType.REQUEST_GET_ALL_USERS,
    };
  }

  public callbackGetAllUsersAction = (isSuccess: boolean, items: User[]): ICallbackGetAllUsersAction => {
    return {
      type: UserListActionType.CALLBACK_GET_ALL_USERS,
      isSuccess,
      items,
    };
  }
}

export const createUserListActionCreator = (): IUserListActionCreator => {
  return new ActionCreator();
};