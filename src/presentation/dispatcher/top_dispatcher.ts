import {Action} from "redux";
import {ITopActionCreator} from "../action/top_action";

interface ITopDispatcher {
  getAllCurrency(): void;
  getPortfolio(): void;
}

class Dispatcher implements ITopDispatcher {

  constructor(private dispatch: (action: Action) => void,
              private actionCreator: ITopActionCreator) {

  }

  public getAllCurrency = (): void => {
    this.dispatch(this.actionCreator.requestGetAllCurrencyAction());
  }

  public getPortfolio = (): void => {
    this.dispatch(this.actionCreator.requestGetPortfolioAction());
  }
}

const createTopDispatcher = (dispatch: (action: Action) => void, actionCreator: ITopActionCreator): ITopDispatcher => {
  return new Dispatcher(dispatch, actionCreator);
};

export { ITopDispatcher, createTopDispatcher };