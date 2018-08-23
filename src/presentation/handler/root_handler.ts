import {handleGetAllCurrencyInTop, handleGetPortfolioInTop} from "./top_handler";
import {fork} from "redux-saga/effects";
import {handleGetLoginUserInApp, handleSignOutInApp} from "./app_handler";
import {
  handleCreateAddressInMenu,
  handleDeleteAddressInMenu,
  handleGetAddressInMenu,
  handleGetAllCurrencyInMenu,
  handleGetAssetInMenu,
} from "./menu_handler";
import {handleGetFollowsInFollows} from "./follows_handler";
import {handleGetFollowersInFollowers} from "./followers_handler";
import {handleGetAllUsersInUsers} from "./users_handler";
import {handleSignInInAuth, handleSignUpInAuth} from "./auth_handler";

function* rootHandler() {
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
  yield fork(handleGetAllUsersInUsers);
  yield fork(handleSignUpInAuth);
  yield fork(handleSignInInAuth);
}

export default rootHandler;