import {TopState} from "../store/top_state";
import {Reducer} from "redux";
import {
  ICallbackGetAllCurrencyAction,
  TopAction,
  TopActionType,
} from "../action/top_action";

const initialState: TopState = {
  currencies: [],
};

const topReducer: Reducer<TopState> = (state = initialState, action: TopAction): TopState => {
  switch (action.type) {
    case TopActionType.REQUEST_GET_ALL_CURRENCY:
      return Object.assign({}, state, {});
    case TopActionType.CALLBACK_GET_ALL_CURRENCY:
      const successGetAllCurrencyAction = action as ICallbackGetAllCurrencyAction;
      return Object.assign({}, state, {
        currencies: successGetAllCurrencyAction.items,
      });
    default:
      return state;
  }
};

export default topReducer;