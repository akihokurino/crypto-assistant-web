import {combineReducers, Reducer} from "redux";
import {AppState} from "../store/app_state";
import topReducer from "./top_reducer";
import layoutReducer from "./layout_reducer";
import followerListReducer from "./follower_list_reducer";
import followListReducer from "./follow_list_reducer";
import userListReducer from "./user_list_reducer";
import authReducer from "./auth_reducer";
import addressListReducer from "./address_list_reducer";
import myPageReducer from "./mypage_reducer";
import registerAddressReducer from "./register_address_reducer";
import userDetailReducer from "./user_detail_reducer";

const appReducer: Reducer<AppState> = combineReducers<AppState>({
  layoutReducer,
  topReducer,
  followListReducer,
  followerListReducer,
  userListReducer,
  authReducer,
  addressListReducer,
  myPageReducer,
  registerAddressReducer,
  userDetailReducer,
});

export default appReducer;