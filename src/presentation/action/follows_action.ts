import {Action} from "redux";
import {User} from "../../domain/model/user";

export enum FollowsActionType {
  REQUEST_GET_FOLLOWS = "FOLLOWS_REQUEST_GET_FOLLOWS",
  CALLBACK_GET_FOLLOWS = "FOLLOWS_CALLBACK_GET_FOLLOWS",
}

export interface IRequestGetFollowsAction extends Action {
  type: FollowsActionType.REQUEST_GET_FOLLOWS;
}

export interface ICallbackGetFollowsAction extends Action {
  type: FollowsActionType.CALLBACK_GET_FOLLOWS;
  isSuccess: boolean;
  items: User[];
}

export type FollowsAction = IRequestGetFollowsAction | ICallbackGetFollowsAction;

export interface IFollowsActionCreator {
  requestGetFollowsAction(): IRequestGetFollowsAction;

  callbackGetFollowsAction(isSuccess: boolean, items: User[]): ICallbackGetFollowsAction;
}

class ActionCreator implements IFollowsActionCreator {
  public requestGetFollowsAction(): IRequestGetFollowsAction {
    return {
      type: FollowsActionType.REQUEST_GET_FOLLOWS,
    };
  }

  public callbackGetFollowsAction(isSuccess: boolean, items: User[]): ICallbackGetFollowsAction {
    return {
      type: FollowsActionType.CALLBACK_GET_FOLLOWS,
      isSuccess,
      items,
    };
  }
}

export const createFollowsActionCreator = (): IFollowsActionCreator => {
  return new ActionCreator();
};