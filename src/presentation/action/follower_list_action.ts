import {Action} from "redux";
import {User} from "../../domain/model/user";

export enum FollowerListActionType {
  REQUEST_GET_FOLLOWERS = "FOLLOWER_LIST_REQUEST_GET_FOLLOWERS",
  CALLBACK_GET_FOLLOWERS = "FOLLOWER_LIST_CALLBACK_GET_FOLLOWERS",
}

export interface IRequestGetFollowersAction extends Action {
  type: FollowerListActionType.REQUEST_GET_FOLLOWERS;
}

export interface ICallbackGetFollowersAction extends Action {
  type: FollowerListActionType.CALLBACK_GET_FOLLOWERS;
  isSuccess: boolean;
  items: User[];
}

export type FollowerListAction = IRequestGetFollowersAction | ICallbackGetFollowersAction;

export interface IFollowerListActionCreator {
  requestGetFollowersAction(): IRequestGetFollowersAction;

  callbackGetFollowersAction(isSuccess: boolean, items: User[]): ICallbackGetFollowersAction;
}

class ActionCreator implements IFollowerListActionCreator {
  public requestGetFollowersAction = (): IRequestGetFollowersAction => {
    return {
      type: FollowerListActionType.REQUEST_GET_FOLLOWERS,
    };
  }

  public callbackGetFollowersAction = (isSuccess: boolean, items: User[]): ICallbackGetFollowersAction => {
    return {
      type: FollowerListActionType.CALLBACK_GET_FOLLOWERS,
      isSuccess,
      items,
    };
  }
}

export const createFollowerListActionCreator = (): IFollowerListActionCreator => {
  return new ActionCreator();
};