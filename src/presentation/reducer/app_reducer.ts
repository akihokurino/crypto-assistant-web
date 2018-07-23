import {AppState, AuthState} from "../store/app_state";
import {Reducer} from "redux";
import {
  AppAction,
  AppActionType, ICallbackGetLoginUserAction,
  ICallbackSignInAction,
  ICallbackSignOutAction,
  ICallbackSignUpAction,
} from "../action/app_action";

const initialState: AppState = {
  user: null,
  authState: AuthState.UNKNOWN,
};

const appReducer: Reducer<AppState> = (state = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionType.CALLBACK_SIGN_UP: {
      const _action = action as ICallbackSignUpAction;
      if (action.isSuccess) {
        return Object.assign({}, state, {
          user: _action.item,
          authState: AuthState.LOGIN_USER,
        });
      } else {
        return Object.assign({}, state, {
          user: null,
          authState: AuthState.GUEST,
        });
      }
    }
    case AppActionType.CALLBACK_SIGN_IN: {
      const _action = action as ICallbackSignInAction;
      if (_action.isSuccess) {
        return Object.assign({}, state, {
          user: _action.item,
          authState: AuthState.LOGIN_USER,
        });
      } else {
        return Object.assign({}, state, {
          user: null,
          authState: AuthState.GUEST,
        });
      }
    }
    case AppActionType.CALLBACK_SIGN_OUT: {
      const _action = action as ICallbackSignOutAction;
      if (_action.isSuccess) {
        return Object.assign({}, state, {
          user: null,
          authState: AuthState.GUEST,
        });
      } else {
        return state;
      }
    }
    case AppActionType.CALLBACK_GET_LOGIN_USER: {
      const _action = action as ICallbackGetLoginUserAction;
      if (_action.item) {
        return Object.assign({}, state, {
          user: _action.item,
          authState: AuthState.LOGIN_USER,
        });
      } else {
        return Object.assign({}, state, {
          user: null,
          authState: AuthState.GUEST,
        });
      }
    }
    default:
      return state;
  }
};

export default appReducer;