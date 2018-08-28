import {TopState} from "./top_state";
import {LayoutState} from "./layout_state";
import {FollowerListState} from "./follower_list_state";
import {FollowListState} from "./follow_list_state";
import {UserListState} from "./user_list_state";
import {AuthState} from "./auth_state";
import {AddressListState} from "./address_list_state";
import {MyPageState} from "./mypage_state";
import {RegisterAddressState} from "./register_address";
import {UserDetailState} from "./user_detail_state";

export type AppState = {
  layoutReducer: LayoutState,
  topReducer: TopState,
  followListReducer: FollowListState,
  followerListReducer: FollowerListState,
  userListReducer: UserListState,
  userDetailReducer: UserDetailState,
  authReducer: AuthState,
  addressListReducer: AddressListState,
  myPageReducer: MyPageState,
  registerAddressReducer: RegisterAddressState,
};