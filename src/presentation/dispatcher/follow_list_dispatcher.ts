import {Action} from "redux";
import {IFollowListActionCreator} from "../action/follow_list_action";

interface IFollowListDispatcher {
  getFollows(): void;
}

class Dispatcher implements IFollowListDispatcher {

  constructor(private dispatch: (action: Action) => void,
              private actionCreator: IFollowListActionCreator) {

  }

  public getFollows = (): void => {
    this.dispatch(this.actionCreator.requestGetFollowsAction());
  }
}

const createFollowListDispatcher = (dispatch: (action: Action) => void, actionCreator: IFollowListActionCreator): IFollowListDispatcher => {
  return new Dispatcher(dispatch, actionCreator);
};

export { IFollowListDispatcher, createFollowListDispatcher };