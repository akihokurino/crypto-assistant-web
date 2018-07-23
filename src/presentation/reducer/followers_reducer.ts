import {Reducer} from "redux";
import {FollowersState} from "../store/follows_state";
import {FollowersAction, FollowersActionType, ICallbackGetFollowersAction} from "../action/followers_action";

const initialState: FollowersState = {
  users: null,
};

const followersReducer: Reducer<FollowersState> = (state = initialState, action: FollowersAction): FollowersState => {
  switch (action.type) {
    case FollowersActionType.CALLBACK_GET_FOLLOWERS: {
      const _action = action as ICallbackGetFollowersAction;
      return Object.assign({}, state, {
        users: _action.items,
      });
    }
    default:
      return state;
  }
};

export default followersReducer;