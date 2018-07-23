import {call, put, take} from "redux-saga/effects";
import {createApiClient, IApiClient} from "../../infra/api/client";
import {IUserRepository} from "../../domain/repository/user_repository";
import {createUserAPI} from "../../infra/api/service/user_api";
import {User} from "../../domain/model/user";
import {
  createFollowersActionCreator,
  FollowersActionType,
  IFollowersActionCreator,
  IRequestGetFollowersAction,
} from "../action/followers_action";

const apiClient: IApiClient = createApiClient();
const userRepository: IUserRepository = createUserAPI(apiClient);
const actionCreator: IFollowersActionCreator = createFollowersActionCreator();

function* handleGetFollowersInFollowers() {
  while (true) {
    const action: IRequestGetFollowersAction = yield take(FollowersActionType.REQUEST_GET_FOLLOWERS);
    const users: User[] = yield call(getFollowers);
    yield put(actionCreator.callbackGetFollowersAction(true, users));
  }
}

const getFollowers = (): Promise<User[]> => {
  return userRepository.getFollowers(null);
};

export { handleGetFollowersInFollowers };