import {FollowListState} from "../store/follow_list_state";
import {Reducer} from "redux";
import {FollowListAction, FollowListActionType, ICallbackGetFollowsAction} from "../action/follow_list_action";

const initialState: FollowListState = {
  users: null,
};

const followsReducer: Reducer<FollowListState> = (state = initialState, action: FollowListAction): FollowListState => {
  switch (action.type) {
    case FollowListActionType.CALLBACK_GET_FOLLOWS: {
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