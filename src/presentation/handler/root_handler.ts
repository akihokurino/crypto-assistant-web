import {handleGetAllCurrencyInTop, handleGetPortfolioInTop} from "./top_handler";
import {fork} from "redux-saga/effects";
import {handleGetLoginUserInApp, handleSignInInApp, handleSignOutInApp, handleSignUpInApp} from "./app_handler";
import {
  handleGetAddressInMenu,
  handleGetAssetInMenu,
  handleGetAllCurrencyInMenu,
  handleCreateAddressInMenu,
  handleDeleteAddressInMenu,
} from "./menu_handler";
import {handleGetFollowsInFollows} from "./follows_handler";
import {handleGetFollowersInFollowers} from "./followers_handler";

function* rootHandler() {
  yield fork(handleSignUpInApp);
  yield fork(handleSignInInApp);
  yield fork(handleSignOutInApp);
  yield fork(handleGetLoginUserInApp);
  yield fork(handleGetAllCurrencyInTop);
  yield fork(handleGetPortfolioInTop);
  yield fork(handleGetAssetInMenu);
  yield fork(handleGetAddressInMenu);
  yield fork(handleGetAllCurrencyInMenu);
  yield fork(handleCreateAddressInMenu);
  yield fork(handleDeleteAddressInMenu);
  yield fork(handleGetFollowsInFollows);
  yield fork(handleGetFollowersInFollowers);
}

export default rootHandler;