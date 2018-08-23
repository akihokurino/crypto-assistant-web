import {Reducer} from "redux";
import {AuthState} from "../store/auth_state";
import {AuthAction, AuthActionType} from "../action/auth_action";

const initialState: AuthState = {

};

const authReducer: Reducer<AuthState> = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionType.CALLBACK_SIGN_UP: {
      return state;
    }
    case AuthActionType.CALLBACK_SIGN_IN: {
      return state;
    }
    default:
      return state;
  }
};

export default authReducer;