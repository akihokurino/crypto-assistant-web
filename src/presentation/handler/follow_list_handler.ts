import {call, put, take} from "redux-saga/effects";
import {createApiClient, IApiClient} from "../../infra/api/client";
import {IUserRepository} from "../../domain/repository/user_repository";
import {createUserAPI} from "../../infra/api/service/user_api";
import {
  createFollowListActionCreator,
  FollowListActionType,
  IFollowListActionCreator,
  IRequestGetFollowsAction,
} from "../action/follow_list_action";
import {User} from "../../domain/model/user";

const apiClient: IApiClient = createApiClient();
const userRepository: IUserRepository = createUserAPI(apiClient);
const actionCreator: IFollowListActionCreator = createFollowListActionCreator();

function* handleGetFollowsInFollowList() {
  while (true) {
    const action: IRequestGetFollowsAction = yield take(FollowListActionType.REQUEST_GET_FOLLOWS);
    const users: User[] = yield call(getFollows);
    yield put(actionCreator.callbackGetFollowsAction(true, users));
  }
}

const getFollows = (): Promise<User[]> => {
  return userRepository.getFollows(null);
};

export { handleGetFollowsInFollowList };