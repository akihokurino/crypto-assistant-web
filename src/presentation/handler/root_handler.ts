import {handleGetAllCurrencyInTop, handleGetPortfolioInTop} from "./top_handler";
import {fork} from "redux-saga/effects";
import {handleGetLoginUserInApp, handleSignOutInApp} from "./app_handler";
import {handleGetFollowsInFollows} from "./follows_handler";
import {handleGetFollowersInFollowers} from "./followers_handler";
import {handleGetAllUsersInUsers} from "./users_handler";
import {handleSignInInAuth, handleSignUpInAuth} from "./auth_handler";
import {handleDeleteAddressInAddresses, handleGetAddressInAddresses} from "./address_handler";
import {handleGetAssetInMyPage} from "./mypage_handler";
import {handleCreateAddressInRegisterAddress, handleGetAllCurrencyInRegisterAddress} from "./register_address_handler";
import {handleGetPortfolioInUser, handleGetUserInUser} from "./user_handler";

function* rootHandler() {
  yield fork(handleSignOutInApp);
  yield fork(handleGetLoginUserInApp);
  yield fork(handleGetAllCurrencyInTop);
  yield fork(handleGetPortfolioInTop);
  yield fork(handleGetAddressInAddresses);
  yield fork(handleDeleteAddressInAddresses);
  yield fork(handleGetFollowsInFollows);
  yield fork(handleGetFollowersInFollowers);
  yield fork(handleGetAllUsersInUsers);
  yield fork(handleSignUpInAuth);
  yield fork(handleSignInInAuth);
  yield fork(handleGetAssetInMyPage);
  yield fork(handleGetAllCurrencyInRegisterAddress);
  yield fork(handleCreateAddressInRegisterAddress);
  yield fork(handleGetUserInUser);
  yield fork(handleGetPortfolioInUser);
}

export default rootHandler;