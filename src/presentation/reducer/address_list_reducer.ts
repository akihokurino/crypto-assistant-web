import {AddressListState} from "../store/address_list_state";
import {Reducer} from "redux";
import {
  AddressListAction,
  AddressListActionType,
  ICallbackGetAddressAction,
  IRequestDeleteAddressAction,
} from "../action/address_action";
import {Address} from "../../domain/model/address";

const initialState: AddressListState = {
  addresses: null,
};

const addressListReducer: Reducer<AddressListState> = (state = initialState, action: AddressListAction): AddressListState => {
  switch (action.type) {
    case AddressListActionType.CALLBACK_GET_ADDRESS: {
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
    case AddressListActionType.REQUEST_DELETE_ADDRESS: {
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

export default addressListReducer;