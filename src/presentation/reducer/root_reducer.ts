import {combineReducers, Reducer} from "redux";
import {RootState} from "../store/root_state";
import topReducer from "./top_reducer";
import appReducer from "./app_reducer";
import followersReducer from "./followers_reducer";
import followsReducer from "./follows_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import addressesReducer from "./address_reducer";
import myPageReducer from "./mypage_reducer";

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  appReducer,
  topReducer,
  followsReducer,
  followersReducer,
  usersReducer,
  authReducer,
  addressesReducer,
  myPageReducer,
});

export default rootReducer;