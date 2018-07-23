import {Reducer} from "redux";
import {MenuState} from "../store/menu_state";
import {
  ICallbackCreateAddressAction,
  ICallbackGetAddressAction,
  ICallbackGetAllCurrencyAction,
  ICallbackGetAssetAction, IRequestDeleteAddressAction,
  MenuAction,
  MenuActionType,
} from "../action/menu_action";
import {Address} from "../../domain/model/address";

const initialState: MenuState = {
  asset: null,
  addresses: null,
  currencies: [],
};

const menuReducer: Reducer<MenuState> = (state = initialState, action: MenuAction): MenuState => {
  switch (action.type) {
    case MenuActionType.CALLBACK_GET_ASSET: {
      const _action = action as ICallbackGetAssetAction;
      if (_action.isSuccess) {
        return Object.assign({}, state, {
          asset: _action.item,
        });
      } else {
        return Object.assign({}, state, {
          asset: null,
        });
      }
    }
    case MenuActionType.CALLBACK_GET_ADDRESS: {
      const _action = action as ICallbackGetAddressAction;
      if (_action.isSuccess) {
        return Object.assign({}, state, {
          addresses: _action.items,
        });
      } else {
        return Object.assign({}, state, {
          addresses: [],
        });
      }
    }
    case MenuActionType.CALLBACK_GET_ALL_CURRENCY: {
      const _action = action as ICallbackGetAllCurrencyAction;
      return Object.assign({}, state, {
        currencies: _action.items,
      });
    }
    case MenuActionType.CALLBACK_CREATE_ADDRESS: {
      const _action = action as ICallbackCreateAddressAction;
      let newAddresses: Address[];
      if (state.addresses) {
        newAddresses = state.addresses.concat([_action.item]);
      } else {
        newAddresses = [_action.item];
      }
      return Object.assign({}, state, {
        addresses: newAddresses,
      });
    }
    case MenuActionType.REQUEST_DELETE_ADDRESS: {
      const _action = action as IRequestDeleteAddressAction;
      if (state.addresses) {
        let newAddresses: Address[];
        newAddresses = state.addresses.concat();
        const index = newAddresses.findIndex((item: Address): boolean => {
          return item.id === _action.item.id;
        });
        newAddresses.splice(index, 1);
        return Object.assign({}, state, {
          addresses: newAddresses,
        });
      } else {
        return state;
      }
    }
    default:
      return state;
  }
};

export default menuReducer;