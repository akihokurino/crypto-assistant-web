import {Action} from "redux";
import {IAddressListActionCreator} from "../action/address_action";
import {Address} from "../../domain/model/address";

interface IAddressListDispatcher {
  getAddresses(): void;
  deleteAddress(address: Address): void;
}

class Dispatcher implements IAddressListDispatcher {

  constructor(private dispatch: (action: Action) => void,
              private actionCreator: IAddressListActionCreator) {

  }

  public getAddresses = (): void => {
    this.dispatch(this.actionCreator.requestGetAddressAction());
  }

  public deleteAddress = (address: Address): void => {
    this.dispatch(this.actionCreator.requestDeleteAddressAction(address));
  }
}

const createAddressListDispatcher = (dispatch: (action: Action) => void, actionCreator: IAddressListActionCreator): IAddressListDispatcher => {
  return new Dispatcher(dispatch, actionCreator);
};

export { IAddressListDispatcher, createAddressListDispatcher };