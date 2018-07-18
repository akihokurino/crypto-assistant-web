import {handleGetAllCurrencyInTop} from "./top_handler";
import {fork} from "redux-saga/effects";
import {handleGetLoginUserInApp, handleSignInInApp, handleSignOutInApp, handleSignUpInApp} from "./app_handler";
import {handleGetAddressInMenu, handleGetAssetInMenu, handleGetAllCurrencyInMenu} from "./menu_handler";

function* rootHandler() {
  yield fork(handleSignUpInApp);
  yield fork(handleSignInInApp);
  yield fork(handleSignOutInApp);
  yield fork(handleGetLoginUserInApp);
  yield fork(handleGetAllCurrencyInTop);
  yield fork(handleGetAssetInMenu);
  yield fork(handleGetAddressInMenu);
  yield fork(handleGetAllCurrencyInMenu);
}

export default rootHandler;