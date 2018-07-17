import {TopState} from "./top_state";
import {AppState} from "./app_state";
import {MenuState} from "./menu_state";

export type RootState = {
  appReducer: AppState,
  menuReducer: MenuState,
  topReducer: TopState,
};