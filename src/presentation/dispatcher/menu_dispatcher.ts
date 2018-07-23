import {Action} from "redux";
import {IMenuActionCreator} from "../action/menu_action";
import {Address} from "../../domain/model/address";

interface IMenuDispatcher {
  getAsset(): void;
  getAddress(): void;
  getAllCurrency(): void;
  createAddress(address: Address): void;
  deleteAddress(address: Address): void;
}

class Dispatcher implements IMenuDispatcher {

  constructor(private dispatch: (action: Action) => void,
              private actionCreator: IMenuActionCreator) {

  }

  public getAsset(): void {
    this.dispatch(this.actionCreator.requestGetAssetAction());
  }

  public getAddress(): void {
    this.dispatch(this.actionCreator.requestGetAddressAction());
  }

  public getAllCurrency(): void {
    this.dispatch(this.actionCreator.requestGetAllCurrencyAction());
  }

  public createAddress(address: Address): void {
    this.dispatch(this.actionCreator.requestCreateAddressAction(address));
  }

  public deleteAddress(address: Address): void {
    this.dispatch(this.actionCreator.requestDeleteAddressAction(address));
  }
}

const createMenuDispatcher = (dispatch: (action: Action) => void, actionCreator: IMenuActionCreator): IMenuDispatcher => {
  return new Dispatcher(dispatch, actionCreator);
};

export { IMenuDispatcher, createMenuDispatcher };