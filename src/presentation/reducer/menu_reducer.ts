import {Reducer} from "redux";
import {MenuState} from "../store/menu_state";
import {ICallbackGetAssetAction, MenuAction, MenuActionType} from "../action/menu_action";

const initialState: MenuState = {
  asset: null,
};

const menuReducer: Reducer<MenuState> = (state = initialState, action: MenuAction): MenuState => {
  switch (action.type) {
    case MenuActionType.CALLBACK_GET_ASSET:
      const callbackGetAssetAction = action as ICallbackGetAssetAction;
      if (callbackGetAssetAction.isSuccess) {
        return Object.assign({}, state, {
          asset: callbackGetAssetAction.item,
        });
      } else {
        return Object.assign({}, state, {
          asset: null,
        });
      }
    default:
      return state;
  }
};

export default menuReducer;