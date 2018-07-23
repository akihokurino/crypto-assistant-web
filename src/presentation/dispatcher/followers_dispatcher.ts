import {Action} from "redux";
import {IFollowersActionCreator} from "../action/followers_action";

interface IFollowersDispatcher {
  getFollowers(): void;
}

class Dispatcher implements IFollowersDispatcher {

  constructor(private dispatch: (action: Action) => void,
              private actionCreator: IFollowersActionCreator) {

  }

  public getFollowers(): void {
    this.dispatch(this.actionCreator.requestGetFollowersAction());
  }
}

const createFollowersDispatcher = (dispatch: (action: Action) => void, actionCreator: IFollowersActionCreator): IFollowersDispatcher => {
  return new Dispatcher(dispatch, actionCreator);
};

export { IFollowersDispatcher, createFollowersDispatcher };