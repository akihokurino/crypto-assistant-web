import {combineReducers, Reducer} from "redux";
import {RootState} from "../store/root_state";
import topReducer from "./top_reducer";
import appReducer from "./app_reducer";

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  appReducer,
  topReducer,
});

export default rootReducer;