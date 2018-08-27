import {Reducer} from "redux";
import {UserState} from "../store/user_state";
import {ICallbackGetPortfolioAction, ICallbackGetUserAction, UserAction, UserActionType} from "../action/user_action";

const initialState: UserState = {
  user: null,
  portfolios: [],
};

const userReducer: Reducer<UserState> = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionType.CALLBACK_GET_USER: {
      const _action = action as ICallbackGetUserAction;
      if (_action.isSuccess) {
        return Object.assign({}, state, {
          user: _action.item,
        });
      } else {
        return Object.assign({}, state, {
          user: null,
        });
      }
    }
    case UserActionType.CALLBACK_GET_PORTFOLIO: {
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

export default userReducer;