import {Reducer} from "redux";
import {MenuState} from "../store/menu_state";
import {
  ICallbackGetAddressAction,
  ICallbackGetAllCurrencyAction,
  ICallbackGetAssetAction,
  MenuAction,
  MenuActionType,
} from "../action/menu_action";

const initialState: MenuState = {
  asset: null,
  addresses: null,
  currencies: [],
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
    case MenuActionType.CALLBACK_GET_ADDRESS:
      const callbackGetAddressAction = action as ICallbackGetAddressAction;
      if (callbackGetAddressAction.isSuccess) {
        return Object.assign({}, state, {
          addresses: callbackGetAddressAction.items,
        });
      } else {
        return Object.assign({}, state, {
          addresses: [],
        });
      }
    case MenuActionType.CALLBACK_GET_ALL_CURRENCY:
      const callbackGetAllCurrencyAction = action as ICallbackGetAllCurrencyAction;
      return Object.assign({}, state, {
        currencies: callbackGetAllCurrencyAction.items,
      });
    default:
      return state;
  }
};

export default menuReducer;