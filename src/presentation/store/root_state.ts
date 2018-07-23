import {TopState} from "./top_state";
import {AppState} from "./app_state";
import {MenuState} from "./menu_state";
import {FollowsState} from "./followers_state";
import {FollowersState} from "./follows_state";

export type RootState = {
  appReducer: AppState,
  menuReducer: MenuState,
  topReducer: TopState,
  followsReducer: FollowsState,
  followersReducer: FollowersState,
};