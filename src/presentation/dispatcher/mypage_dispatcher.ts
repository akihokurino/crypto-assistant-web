import {Action} from "redux";
import {IMyPageActionCreator} from "../action/mypage_action";

interface IMyPageDispatcher {
  getAsset(): void;
}

class Dispatcher implements IMyPageDispatcher {

  constructor(private dispatch: (action: Action) => void,
              private actionCreator: IMyPageActionCreator) {

  }

  public getAsset(): void {
    this.dispatch(this.actionCreator.requestGetAssetAction());
  }
}

const createMyPageDispatcher = (dispatch: (action: Action) => void, actionCreator: IMyPageActionCreator): IMyPageDispatcher => {
  return new Dispatcher(dispatch, actionCreator);
};

export { IMyPageDispatcher, createMyPageDispatcher };