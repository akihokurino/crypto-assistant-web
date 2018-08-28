import {call, put, take} from "redux-saga/effects";
import {createApiClient, IApiClient} from "../../infra/api/client";
import {IUserRepository} from "../../domain/repository/user_repository";
import {createUserAPI} from "../../infra/api/service/user_api";
import {User} from "../../domain/model/user";
import {
  createUserListActionCreator,
  IRequestGetAllUsersAction,
  IUserListActionCreator,
  UserListActionType,
} from "../action/user_list_action";

const apiClient: IApiClient = createApiClient();
const userRepository: IUserRepository = createUserAPI(apiClient);
const actionCreator: IUserListActionCreator = createUserListActionCreator();

function* handleGetAllUsersInUserList() {
  while (true) {
    const action: IRequestGetAllUsersAction = yield take(UserListActionType.REQUEST_GET_ALL_USERS);
    const users: User[] = yield call(getAllUsers);
    yield put(actionCreator.callbackGetAllUsersAction(true, users));
  }
}

const getAllUsers = (): Promise<User[]> => {
  return userRepository.getAll();
};

export { handleGetAllUsersInUserList };