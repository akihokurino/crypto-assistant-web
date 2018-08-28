import {LayoutState} from "../store/layout_state";
import {Reducer} from "redux";
import {
  LayoutAction,
  LayoutActionType, ICallbackGetLoginUserAction, ICallbackSignInAction,
  ICallbackSignOutAction, ICallbackSignUpAction,
} from "../action/layout_action";
import {AuthStateType} from "../auth_state_type";

const initialState: LayoutState = {
  user: null,
  authState: AuthStateType.UNKNOWN,
};

const layoutReducer: Reducer<LayoutState> = (state = initialState, action: LayoutAction): LayoutState => {
  switch (action.type) {
    case LayoutActionType.CALLBACK_SIGN_UP: {
      const _action = action as ICallbackSignUpAction;
      if (action.isSuccess) {
        return Object.assign({}, state, {
          user: _action.item,
          authState: AuthStateType.LOGIN_USER,
        });
      } else {
        return Object.assign({}, state, {
          user: null,
          authState: AuthStateType.GUEST,
        });
      }
    }
    case LayoutActionType.CALLBACK_SIGN_IN: {
      const _action = action as ICallbackSignInAction;
      if (_action.isSuccess) {
        return Object.assign({}, state, {
          user: _action.item,
          authState: AuthStateType.LOGIN_USER,
        });
      } else {
        return Object.assign({}, state, {
          user: null,
          authState: AuthStateType.GUEST,
        });
      }
    }
    case LayoutActionType.CALLBACK_SIGN_OUT: {
      const _action = action as ICallbackSignOutAction;
      if (_action.isSuccess) {
        return Object.assign({}, state, {
          user: null,
          authState: AuthStateType.GUEST,
        });
      } else {
        return state;
      }
    }
    case LayoutActionType.CALLBACK_GET_LOGIN_USER: {
      const _action = action as ICallbackGetLoginUserAction;
      if (_action.item) {
        return Object.assign({}, state, {
          user: _action.item,
          authState: AuthStateType.LOGIN_USER,
        });
      } else {
        return Object.assign({}, state, {
          user: null,
          authState: AuthStateType.GUEST,
        });
      }
    }
    default:
      return state;
  }
};

export default layoutReducer;