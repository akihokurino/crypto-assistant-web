import {AddressesState} from "../store/address_state";
import {Reducer} from "redux";
import {
  AddressesAction,
  AddressesActionType,
  ICallbackGetAddressAction,
  IRequestDeleteAddressAction,
} from "../action/address_action";
import {Address} from "../../domain/model/address";

const initialState: AddressesState = {
  addresses: null,
};

const addressesReducer: Reducer<AddressesState> = (state = initialState, action: AddressesAction): AddressesState => {
  switch (action.type) {
    case AddressesActionType.CALLBACK_GET_ADDRESS: {
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
    case AddressesActionType.REQUEST_DELETE_ADDRESS: {
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

export default addressesReducer;