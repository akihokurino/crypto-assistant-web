import {Reducer} from "redux";
import {UserDetailState} from "../store/user_detail_state";
import {ICallbackGetPortfolioAction, ICallbackGetUserAction, UserDetailAction, UserDetailActionType} from "../action/user_detail_action";

const initialState: UserDetailState = {
  user: null,
  portfolios: [],
};

const userDetailReducer: Reducer<UserDetailState> = (state = initialState, action: UserDetailAction): UserDetailState => {
  switch (action.type) {
    case UserDetailActionType.CALLBACK_GET_USER: {
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
    case UserDetailActionType.CALLBACK_GET_PORTFOLIO: {
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

export default userDetailReducer;