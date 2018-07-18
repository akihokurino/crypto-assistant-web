import {handleGetAllCurrency} from "./top_handler";
import {fork} from "redux-saga/effects";
import {handleGetLoginUser, handleSignIn, handleSignOut, handleSignUp} from "./app_handler";
import {handleGetAddress, handleGetAsset} from "./menu_handler";

function* rootHandler() {
  yield fork(handleSignUp);
  yield fork(handleSignIn);
  yield fork(handleSignOut);
  yield fork(handleGetLoginUser);
  yield fork(handleGetAllCurrency);
  yield fork(handleGetAsset);
  yield fork(handleGetAddress);
}

export default rootHandler;