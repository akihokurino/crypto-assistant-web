import {Action} from "redux";
import {IAppActionCreator} from "../action/app_action";

interface IAppDispatcher {
  signUp(username: string, email: string, password: string): void;
}

class Dispatcher implements IAppDispatcher {

  constructor(private dispatch: (action: Action) => void,
              private actionCreator: IAppActionCreator) {

  }

  public signUp(username: string, email: string, password: string) {
    this.dispatch(this.actionCreator.requestSignUpAction(username, email, password));
  }
}

const createAppDispatcher = (dispatch: (action: Action) => void, actionCreator: IAppActionCreator): IAppDispatcher => {
  return new Dispatcher(dispatch, actionCreator);
};

export { IAppDispatcher, createAppDispatcher };