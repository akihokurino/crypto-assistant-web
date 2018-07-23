import {TopState} from "../store/top_state";
import {Reducer} from "redux";
import {
  ICallbackGetAllCurrencyAction, ICallbackGetPortfolioAction,
  TopAction,
  TopActionType,
} from "../action/top_action";

const initialState: TopState = {
  currencies: [],
  portfolios: null,
};

const topReducer: Reducer<TopState> = (state = initialState, action: TopAction): TopState => {
  switch (action.type) {
    case TopActionType.CALLBACK_GET_ALL_CURRENCY: {
      const _action = action as ICallbackGetAllCurrencyAction;
      return Object.assign({}, state, {
        currencies: _action.items,
      });
    }
    case TopActionType.CALLBACK_GET_PORTFOLIO: {
      const _action = action as ICallbackGetPortfolioAction;
      if (_action.isSuccess) {
        return Object.assign({}, state, {
          portfolios: _action.items,
        });
      } else {
        return Object.assign({}, state, {
          portfolios: [],
        });
      }
    }
    default:
      return state;
  }
};

export default topReducer;