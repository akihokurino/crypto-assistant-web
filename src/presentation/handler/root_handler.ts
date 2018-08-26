import {handleGetAllCurrencyInTop, handleGetPortfolioInTop} from "./top_handler";
import {fork} from "redux-saga/effects";
import {handleGetLoginUserInApp, handleSignOutInApp} from "./app_handler";
import {handleGetFollowsInFollows} from "./follows_handler";
import {handleGetFollowersInFollowers} from "./followers_handler";
import {handleGetAllUsersInUsers} from "./users_handler";
import {handleSignInInAuth, handleSignUpInAuth} from "./auth_handler";
import {handleDeleteAddressInMenu, handleGetAddressInMenu} from "./address_handler";

function* rootHandler() {
  yield fork(handleSignOutInApp);
  yield fork(handleGetLoginUserInApp);
  yield fork(handleGetAllCurrencyInTop);
  yield fork(handleGetPortfolioInTop);
  yield fork(handleGetAddressInMenu);
  yield fork(handleDeleteAddressInMenu);
  yield fork(handleGetFollowsInFollows);
  yield fork(handleGetFollowersInFollowers);
  yield fork(handleGetAllUsersInUsers);
  yield fork(handleSignUpInAuth);
  yield fork(handleSignInInAuth);
}

export default rootHandler;