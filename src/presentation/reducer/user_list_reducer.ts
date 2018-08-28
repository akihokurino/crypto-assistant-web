import {Reducer} from "redux";
import {UserListState} from "../store/user_list_state";
import {ICallbackGetAllUsersAction, UserListAction, UserListActionType} from "../action/user_list_action";

const initialState: UserListState = {
  users: null,
};

const userListReducer: Reducer<UserListState> = (state = initialState, action: UserListAction): UserListState => {
  switch (action.type) {
    case UserListActionType.CALLBACK_GET_ALL_USERS: {
      const _action = action as ICallbackGetAllUsersAction;
      return Object.assign({}, state, {
        users: _action.items,
      });
    }
    default:
      return state;
  }
};

export default userListReducer;