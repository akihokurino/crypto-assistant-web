import {TopState} from "./top_state";
import {AppState} from "./app_state";
import {FollowsState} from "./followers_state";
import {FollowersState} from "./follows_state";
import {UsersState} from "./users_state";
import {AuthState} from "./auth_state";
import {AddressesState} from "./address_state";
import {MyPageState} from "./mypage_state";
import {RegisterAddressState} from "./register_address";

export type RootState = {
  appReducer: AppState,
  topReducer: TopState,
  followsReducer: FollowsState,
  followersReducer: FollowersState,
  usersReducer: UsersState,
  authReducer: AuthState,
  addressesReducer: AddressesState,
  myPageReducer: MyPageState,
  registerAddressReducer: RegisterAddressState,
};