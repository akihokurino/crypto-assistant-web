import {handleGetAllCurrency} from "./top_handler";
import {fork} from "redux-saga/effects";
import {handleSignUp} from "./app_handler";

function* rootHandler() {
  yield fork(handleSignUp);
  yield fork(handleGetAllCurrency);
}

export default rootHandler;