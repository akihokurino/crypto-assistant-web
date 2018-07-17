import {Action} from "redux";
import {IMenuActionCreator} from "../action/menu_action";

interface IMenuDispatcher {
  getAsset(): void;
}

class Dispatcher implements IMenuDispatcher {

  constructor(private dispatch: (action: Action) => void,
              private actionCreator: IMenuActionCreator) {

  }

  public getAsset() {
    console.log("a");
    this.dispatch(this.actionCreator.requestGetAssetAction());
  }
}

const createMenuDispatcher = (dispatch: (action: Action) => void, actionCreator: IMenuActionCreator): IMenuDispatcher => {
  return new Dispatcher(dispatch, actionCreator);
};

export { IMenuDispatcher, createMenuDispatcher };