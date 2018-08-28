import {Reducer} from "redux";
import {FollowerListAction, FollowerListActionType, ICallbackGetFollowersAction} from "../action/follower_list_action";
import {FollowerListState} from "../store/follower_list_state";

const initialState: FollowerListState = {
  users: null,
};

const followerListReducer: Reducer<FollowerListState> = (state = initialState, action: FollowerListAction): FollowerListState => {
  switch (action.type) {
    case FollowerListActionType.CALLBACK_GET_FOLLOWERS: {
      const _action = action as ICallbackGetFollowersAction;
      return Object.assign({}, state, {
        users: _action.items,
      });
    }
    default:
      return state;
  }
};

export default followerListReducer;