import {combineReducers, Reducer} from "redux";
import {RootState} from "../store/root_state";
import topReducer from "./top_reducer";
import appReducer from "./app_reducer";
import menuReducer from "./menu_reducer";
import followersReducer from "./followers_reducer";
import followsReducer from "./follows_reducer";
import usersReducer from "./users_reducer";

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  appReducer,
  menuReducer,
  topReducer,
  followsReducer,
  followersReducer,
  usersReducer,
});

export default rootReducer;