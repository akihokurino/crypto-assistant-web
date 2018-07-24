import {Reducer} from "redux";
import {UsersState} from "../store/users_state";
import {ICallbackGetAllUsersAction, UsersAction, UsersActionType} from "../action/users_action";

const initialState: UsersState = {
  users: null,
};

const usersReducer: Reducer<UsersState> = (state = initialState, action: UsersAction): UsersState => {
  switch (action.type) {
    case UsersActionType.CALLBACK_GET_ALL_USERS: {
      const _action = action as ICallbackGetAllUsersAction;
      return Object.assign({}, state, {
        users: _action.items,
      });
    }
    default:
      return state;
  }
};

export default usersReducer;