import {Action} from "redux";
import {IAppActionCreator} from "../action/app_action";

interface IAppDispatcher {
  signUp(username: string, email: string, password: string): void;
  signIn(email: string, password: string): void;
  signOut(): void;
  getLoginUser(): void;
}

class Dispatcher implements IAppDispatcher {

  constructor(private dispatch: (action: Action) => void,
              private actionCreator: IAppActionCreator) {

  }

  public signUp(username: string, email: string, password: string): void {
    this.dispatch(this.actionCreator.requestSignUpAction(username, email, password));
  }

  public signIn(email: string, password: string): void {
    this.dispatch(this.actionCreator.requestSignInAction(email, password));
  }

  public signOut(): void {
    this.dispatch(this.actionCreator.requestSignOutAction());
  }

  public getLoginUser(): void {
    this.dispatch(this.actionCreator.requestGetLoginUserAction());
  }
}

const createAppDispatcher = (dispatch: (action: Action) => void, actionCreator: IAppActionCreator): IAppDispatcher => {
  return new Dispatcher(dispatch, actionCreator);
};

export { IAppDispatcher, createAppDispatcher };