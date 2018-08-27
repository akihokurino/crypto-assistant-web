import {Reducer} from "redux";
import {RegisterAddressState} from "../store/register_address";
import {
  ICallbackGetAllCurrencyAction,
  RegisterAddressAction,
  RegisterAddressActionType,
} from "../action/register_address_action";

const initialState: RegisterAddressState = {
  currencies: [],
};

const registerAddressReducer: Reducer<RegisterAddressState> = (state = initialState, action: RegisterAddressAction): RegisterAddressState => {
  switch (action.type) {
    case RegisterAddressActionType.CALLBACK_GET_ALL_CURRENCY: {
      const _action = action as ICallbackGetAllCurrencyAction;
      return Object.assign({}, state, {
        currencies: _action.items,
      });
    }
    default:
      return state;
  }
};

export default registerAddressReducer;