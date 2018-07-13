import {combineReducers, Reducer} from "redux";
import {AppState} from "../store/app_state";
import topReducer from "./top_reducer";

const appReducer: Reducer<AppState> = combineReducers<AppState>({
  topReducer,
});

export default appReducer;