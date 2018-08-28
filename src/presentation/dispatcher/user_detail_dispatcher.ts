import {Action} from "redux";
import {IUserDetailActionCreator} from "../action/user_detail_action";

interface IUserDetailDispatcher {
  getUser(userId: string): void;
  getPortfolio(userId: string): void;
}

class Dispatcher implements IUserDetailDispatcher {

  constructor(private dispatch: (action: Action) => void,
              private actionCreator: IUserDetailActionCreator) {

  }

  public getUser = (userId: string): void => {
    this.dispatch(this.actionCreator.requestGetUserAction(userId));
  }

  public getPortfolio = (userId: string): void => {
    this.dispatch(this.actionCreator.requestGetPortfolioAction(userId));
  }
}

const createUserDetailDispatcher = (dispatch: (action: Action) => void, actionCreator: IUserDetailActionCreator): IUserDetailDispatcher => {
  return new Dispatcher(dispatch, actionCreator);
};

export { IUserDetailDispatcher, createUserDetailDispatcher };