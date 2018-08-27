import {Action} from "redux";
import {IAddressesActionCreator} from "../action/address_action";
import {Address} from "../../domain/model/address";

interface IAddressesDispatcher {
  getAddresses(): void;
  deleteAddress(address: Address): void;
}

class Dispatcher implements IAddressesDispatcher {

  constructor(private dispatch: (action: Action) => void,
              private actionCreator: IAddressesActionCreator) {

  }

  public getAddresses(): void {
    this.dispatch(this.actionCreator.requestGetAddressAction());
  }

  public deleteAddress(address: Address): void {
    this.dispatch(this.actionCreator.requestDeleteAddressAction(address));
  }
}

const createAddressesDispatcher = (dispatch: (action: Action) => void, actionCreator: IAddressesActionCreator): IAddressesDispatcher => {
  return new Dispatcher(dispatch, actionCreator);
};

export { IAddressesDispatcher, createAddressesDispatcher };