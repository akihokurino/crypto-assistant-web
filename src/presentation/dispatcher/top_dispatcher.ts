import {Action} from "redux";
import {ITopActionCreator} from "../action/top_action";

interface ITopDispatcher {
  getAllCurrency(): void;
}

class Dispatcher implements ITopDispatcher {

  constructor(private dispatch: (action: Action) => void,
              private actionCreator: ITopActionCreator) {

  }

  public getAllCurrency() {
    this.dispatch(this.actionCreator.requestGetAllCurrencyAction());
  }
}

const createDispatcher = (dispatch: (action: Action) => void, actionCreator: ITopActionCreator): ITopDispatcher => {
  return new Dispatcher(dispatch, actionCreator);
};

export { ITopDispatcher, createDispatcher };