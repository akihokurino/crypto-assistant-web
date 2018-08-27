import {Action} from "redux";
import {Address} from "../../domain/model/address";
import {IRegisterAddressActionCreator} from "../action/register_address_action";

interface IRegisterAddressDispatcher {
  getAllCurrency(): void;
  createAddress(address: Address): void;
}

class Dispatcher implements IRegisterAddressDispatcher {

  constructor(private dispatch: (action: Action) => void,
              private actionCreator: IRegisterAddressActionCreator) {

  }

  public getAllCurrency(): void {
    this.dispatch(this.actionCreator.requestGetAllCurrencyAction());
  }

  public createAddress(address: Address): void {
    this.dispatch(this.actionCreator.requestCreateAddressAction(address));
  }
}

const createRegisterAddressDispatcher = (dispatch: (action: Action) => void, actionCreator: IRegisterAddressActionCreator): IRegisterAddressDispatcher => {
  return new Dispatcher(dispatch, actionCreator);
};

export { IRegisterAddressDispatcher, createRegisterAddressDispatcher };