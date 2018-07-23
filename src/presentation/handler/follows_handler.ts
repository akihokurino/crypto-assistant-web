import {call, put, take} from "redux-saga/effects";
import {createApiClient, IApiClient} from "../../infra/api/client";
import {IUserRepository} from "../../domain/repository/user_repository";
import {createUserAPI} from "../../infra/api/service/user_api";
import {
  createFollowsActionCreator,
  FollowsActionType,
  IFollowsActionCreator,
  IRequestGetFollowsAction,
} from "../action/follows_action";
import {User} from "../../domain/model/user";

const apiClient: IApiClient = createApiClient();
const userRepository: IUserRepository = createUserAPI(apiClient);
const actionCreator: IFollowsActionCreator = createFollowsActionCreator();

function* handleGetFollowsInFollows() {
  while (true) {
    const action: IRequestGetFollowsAction = yield take(FollowsActionType.REQUEST_GET_FOLLOWS);
    const users: User[] = yield call(getFollows);
    yield put(actionCreator.callbackGetFollowsAction(true, users));
  }
}

const getFollows = (): Promise<User[]> => {
  return userRepository.getFollows(null);
};

export { handleGetFollowsInFollows };