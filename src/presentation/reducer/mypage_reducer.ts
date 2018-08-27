import {Reducer} from "redux";
import {MyPageState} from "../store/mypage_state";
import {
  ICallbackGetAssetAction,
  MyPageAction,
  MyPageActionType,
} from "../action/mypage_action";

const initialState: MyPageState = {
  asset: null,
};

const myPageReducer: Reducer<MyPageState> = (state = initialState, action: MyPageAction): MyPageState => {
  switch (action.type) {
    case MyPageActionType.CALLBACK_GET_ASSET: {
      const _action = action as ICallbackGetAssetAction;
      if (_action.isSuccess) {
        return Object.assign({}, state, {
          asset: _action.item,
        });
      } else {
        return Object.assign({}, state, {
          asset: null,
        });
      }
    }
    default:
      return state;
  }
};

export default myPageReducer;