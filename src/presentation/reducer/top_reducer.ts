import {TopState} from "../store/top_state";
import {Reducer} from "redux";
import {
  ISuccessGetAllCurrencyAction,
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
    case TopActionType.SUCCESS_GET_ALL_CURRENCY:
      const successGetAllCurrencyAction = action as ISuccessGetAllCurrencyAction;
      return Object.assign({}, state, {
        currencies: successGetAllCurrencyAction.items,
      });
    case TopActionType.ERROR_GET_ALL_CURRENCY:
      return Object.assign({}, state, {});
    default:
      return state;
  }
};

export default topReducer;