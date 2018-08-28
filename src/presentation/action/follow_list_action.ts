import {Action} from "redux";
import {User} from "../../domain/model/user";

export enum FollowListActionType {
  REQUEST_GET_FOLLOWS = "FOLLOW_LIST_REQUEST_GET_FOLLOWS",
  CALLBACK_GET_FOLLOWS = "FOLLOW_LIST_CALLBACK_GET_FOLLOWS",
}

export interface IRequestGetFollowsAction extends Action {
  type: FollowListActionType.REQUEST_GET_FOLLOWS;
}

export interface ICallbackGetFollowsAction extends Action {
  type: FollowListActionType.CALLBACK_GET_FOLLOWS;
  isSuccess: boolean;
  items: User[];
}

export type FollowListAction = IRequestGetFollowsAction | ICallbackGetFollowsAction;

export interface IFollowListActionCreator {
  requestGetFollowsAction(): IRequestGetFollowsAction;

  callbackGetFollowsAction(isSuccess: boolean, items: User[]): ICallbackGetFollowsAction;
}

class ActionCreator implements IFollowListActionCreator {
  public requestGetFollowsAction = (): IRequestGetFollowsAction => {
    return {
      type: FollowListActionType.REQUEST_GET_FOLLOWS,
    };
  }

  public callbackGetFollowsAction = (isSuccess: boolean, items: User[]): ICallbackGetFollowsAction => {
    return {
      type: FollowListActionType.CALLBACK_GET_FOLLOWS,
      isSuccess,
      items,
    };
  }
}

export const createFollowListActionCreator = (): IFollowListActionCreator => {
  return new ActionCreator();
};