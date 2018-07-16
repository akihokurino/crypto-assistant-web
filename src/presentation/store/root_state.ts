import {TopState} from "./top_state";
import {AppState} from "./app_state";

export type RootState = {
  appReducer: AppState,
  topReducer: TopState,
};