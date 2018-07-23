import {Action} from "redux";
import {IFollowsActionCreator} from "../action/follows_action";

interface IFollowsDispatcher {
  getFollows(): void;
}

class Dispatcher implements IFollowsDispatcher {

  constructor(private dispatch: (action: Action) => void,
              private actionCreator: IFollowsActionCreator) {

  }

  public getFollows(): void {
    this.dispatch(this.actionCreator.requestGetFollowsAction());
  }
}

const createFollowsDispatcher = (dispatch: (action: Action) => void, actionCreator: IFollowsActionCreator): IFollowsDispatcher => {
  return new Dispatcher(dispatch, actionCreator);
};

export { IFollowsDispatcher, createFollowsDispatcher };