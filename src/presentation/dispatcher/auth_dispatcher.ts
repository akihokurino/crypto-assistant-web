import {Action} from "redux";
import {IAuthActionCreator} from "../action/auth_action";

interface IAuthDispatcher {
  signUp(username: string, email: string, password: string): void;
  signIn(email: string, password: string): void;
}

class Dispatcher implements IAuthDispatcher {

  constructor(private dispatch: (action: Action) => void,
              private actionCreator: IAuthActionCreator) {

  }

  public signUp = (username: string, email: string, password: string): void => {
    this.dispatch(this.actionCreator.requestSignUpAction(username, email, password));
  }

  public signIn = (email: string, password: string): void => {
    this.dispatch(this.actionCreator.requestSignInAction(email, password));
  }
}

const createAuthDispatcher = (dispatch: (action: Action) => void, actionCreator: IAuthActionCreator): IAuthDispatcher => {
  return new Dispatcher(dispatch, actionCreator);
};

export { IAuthDispatcher, createAuthDispatcher };