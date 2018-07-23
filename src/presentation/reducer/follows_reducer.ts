import {FollowsState} from "../store/followers_state";
import {Reducer} from "redux";
import {FollowsAction, FollowsActionType, ICallbackGetFollowsAction} from "../action/follows_action";

const initialState: FollowsState = {
  users: null,
};

const followsReducer: Reducer<FollowsState> = (state = initialState, action: FollowsAction): FollowsState => {
  switch (action.type) {
    case FollowsActionType.CALLBACK_GET_FOLLOWS: {
      const _action = action as ICallbackGetFollowsAction;
      return Object.assign({}, state, {
        users: _action.items,
      });
    }
    default:
      return state;
  }
};

export default followsReducer;