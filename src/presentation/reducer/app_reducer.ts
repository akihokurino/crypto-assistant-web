import {AppState} from "../store/app_state";
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
};

const appReducer: Reducer<AppState> = (state = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionType.CALLBACK_SIGN_UP:
      const callbackSignUpAction = action as ICallbackSignUpAction;
      return Object.assign({}, state, {
        user: callbackSignUpAction.item,
      });
    case AppActionType.CALLBACK_SIGN_IN:
      const callbackSignInAction = action as ICallbackSignInAction;
      return Object.assign({}, state, {
        user: callbackSignInAction.item,
      });
    case AppActionType.CALLBACK_SIGN_OUT:
      const callbackSignOutAction = action as ICallbackSignOutAction;
      return Object.assign({}, state, {
        user: null,
      });
    case AppActionType.CALLBACK_GET_LOGIN_USER:
      const callbackGetLoginUserAction = action as ICallbackGetLoginUserAction;
      return Object.assign({}, state, {
        user: callbackGetLoginUserAction.item,
      });
    default:
      return state;
  }
};

export default appReducer;