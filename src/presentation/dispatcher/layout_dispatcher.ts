import {Action} from "redux";
import {ILayoutActionCreator} from "../action/layout_action";

interface ILayoutDispatcher {
  signOut(): void;
  getLoginUser(): void;
}

class Dispatcher implements ILayoutDispatcher {

  constructor(private dispatch: (action: Action) => void,
              private actionCreator: ILayoutActionCreator) {

  }

  public signOut = (): void => {
    this.dispatch(this.actionCreator.requestSignOutAction());
  }

  public getLoginUser = (): void => {
    this.dispatch(this.actionCreator.requestGetLoginUserAction());
  }
}

const createLayoutDispatcher = (dispatch: (action: Action) => void, actionCreator: ILayoutActionCreator): ILayoutDispatcher => {
  return new Dispatcher(dispatch, actionCreator);
};

export { ILayoutDispatcher, createLayoutDispatcher };