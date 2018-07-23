import {Action} from "redux";
import {User} from "../../domain/model/user";

export enum FollowersActionType {
  REQUEST_GET_FOLLOWERS = "FOLLOWS_REQUEST_GET_FOLLOWERS",
  CALLBACK_GET_FOLLOWERS = "FOLLOWS_CALLBACK_GET_FOLLOWERS",
}

export interface IRequestGetFollowersAction extends Action {
  type: FollowersActionType.REQUEST_GET_FOLLOWERS;
}

export interface ICallbackGetFollowersAction extends Action {
  type: FollowersActionType.CALLBACK_GET_FOLLOWERS;
  isSuccess: boolean;
  items: User[];
}

export type FollowersAction = IRequestGetFollowersAction | ICallbackGetFollowersAction;

export interface IFollowersActionCreator {
  requestGetFollowersAction(): IRequestGetFollowersAction;

  callbackGetFollowersAction(isSuccess: boolean, items: User[]): ICallbackGetFollowersAction;
}

class ActionCreator implements IFollowersActionCreator {
  public requestGetFollowersAction(): IRequestGetFollowersAction {
    return {
      type: FollowersActionType.REQUEST_GET_FOLLOWERS,
    };
  }

  public callbackGetFollowersAction(isSuccess: boolean, items: User[]): ICallbackGetFollowersAction {
    return {
      type: FollowersActionType.CALLBACK_GET_FOLLOWERS,
      isSuccess,
      items,
    };
  }
}

export const createFollowersActionCreator = (): IFollowersActionCreator => {
  return new ActionCreator();
};