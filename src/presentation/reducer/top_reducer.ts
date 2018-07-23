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
    case TopActionType.CALLBACK_GET_ALL_CURRENCY:
      const callbackGetAllCurrencyAction = action as ICallbackGetAllCurrencyAction;
      return Object.assign({}, state, {
        currencies: callbackGetAllCurrencyAction.items,
      });
    case TopActionType.CALLBACK_GET_PORTFOLIO:
      const callbackGetPortfolioAction = action as ICallbackGetPortfolioAction;
      if (callbackGetPortfolioAction.isSuccess) {
        return Object.assign({}, state, {
          portfolios: callbackGetPortfolioAction.items,
        });
      } else {
        return Object.assign({}, state, {
          portfolios: [],
        });
      }
    default:
      return state;
  }
};

export default topReducer;