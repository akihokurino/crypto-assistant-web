import {Action} from "redux";
import {IUserActionCreator} from "../action/user_action";

interface IUserDispatcher {
  getUser(userId: string): void;
  getPortfolio(userId: string): void;
}

class Dispatcher implements IUserDispatcher {

  constructor(private dispatch: (action: Action) => void,
              private actionCreator: IUserActionCreator) {

  }

  public getUser = (userId: string): void => {
    this.dispatch(this.actionCreator.requestGetUserAction(userId));
  }

  public getPortfolio = (userId: string): void => {
    this.dispatch(this.actionCreator.requestGetPortfolioAction(userId));
  }
}

const createUserDispatcher = (dispatch: (action: Action) => void, actionCreator: IUserActionCreator): IUserDispatcher => {
  return new Dispatcher(dispatch, actionCreator);
};

export { IUserDispatcher, createUserDispatcher };