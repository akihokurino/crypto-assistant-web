import {handleGetAllCurrencyInTop, handleGetPortfolioInTop} from "./top_handler";
import {fork} from "redux-saga/effects";
import {handleGetLoginUserInLayout, handleSignOutInLayout} from "./layout_handler";
import {handleGetFollowsInFollowList} from "./follow_list_handler";
import {handleGetFollowersInFollowerList} from "./follower_list_handler";
import {handleGetAllUsersInUserList} from "./user_list_handler";
import {handleSignInInAuth, handleSignUpInAuth} from "./auth_handler";
import {handleDeleteAddressInAddressList, handleGetAddressInAddressList} from "./address_list_handler";
import {handleGetAssetInMyPage} from "./mypage_handler";
import {handleCreateAddressInRegisterAddress, handleGetAllCurrencyInRegisterAddress} from "./register_address_handler";
import {handleGetPortfolioInUserDetail, handleGetUserInUserDetail} from "./user_detail_handler";

function* rootHandler() {
  yield fork(handleSignOutInLayout);
  yield fork(handleGetLoginUserInLayout);
  yield fork(handleGetAllCurrencyInTop);
  yield fork(handleGetPortfolioInTop);
  yield fork(handleGetAddressInAddressList);
  yield fork(handleDeleteAddressInAddressList);
  yield fork(handleGetFollowsInFollowList);
  yield fork(handleGetFollowersInFollowerList);
  yield fork(handleGetAllUsersInUserList);
  yield fork(handleSignUpInAuth);
  yield fork(handleSignInInAuth);
  yield fork(handleGetAssetInMyPage);
  yield fork(handleGetAllCurrencyInRegisterAddress);
  yield fork(handleCreateAddressInRegisterAddress);
  yield fork(handleGetUserInUserDetail);
  yield fork(handleGetPortfolioInUserDetail);
}

export default rootHandler;