import {AppState} from "../store/app_state";
import {Reducer} from "redux";
import {AppAction, AppActionType, ISuccessSignUpAction} from "../action/app_action";

const initialState: AppState = {
  user: null,
};

const appReducer: Reducer<AppState> = (state = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionType.REQUEST_SIGN_UP:
      return Object.assign({}, state, {});
    case AppActionType.SUCCESS_SIGN_UP:
      const successSignUpAction = action as ISuccessSignUpAction;
      return Object.assign({}, state, {
        user: successSignUpAction.item,
      });
    case AppActionType.ERROR_SIGN_UP:
      return Object.assign({}, state, {});
    default:
      return state;
  }
};

export default appReducer;