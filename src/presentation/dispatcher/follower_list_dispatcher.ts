import {Action} from "redux";
import {IFollowerListActionCreator} from "../action/follower_list_action";

interface IFollowerListDispatcher {
  getFollowers(): void;
}

class Dispatcher implements IFollowerListDispatcher {

  constructor(private dispatch: (action: Action) => void,
              private actionCreator: IFollowerListActionCreator) {

  }

  public getFollowers = (): void => {
    this.dispatch(this.actionCreator.requestGetFollowersAction());
  }
}

const createFollowerListDispatcher = (dispatch: (action: Action) => void, actionCreator: IFollowerListActionCreator): IFollowerListDispatcher => {
  return new Dispatcher(dispatch, actionCreator);
};

export { IFollowerListDispatcher, createFollowerListDispatcher };