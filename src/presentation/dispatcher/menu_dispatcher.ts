import {Action} from "redux";
import {IMenuActionCreator} from "../action/menu_action";

interface IMenuDispatcher {
  getAsset(): void;
  getAddress(): void;
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
}

const createMenuDispatcher = (dispatch: (action: Action) => void, actionCreator: IMenuActionCreator): IMenuDispatcher => {
  return new Dispatcher(dispatch, actionCreator);
};

export { IMenuDispatcher, createMenuDispatcher };