import {call, put, take} from "redux-saga/effects";
import {
  AppActionType,
  createAppActionCreator,
  IAppActionCreator,
  IRequestGetLoginUserAction,
  IRequestSignOutAction,
} from "../action/app_action";
import {createAuthUsecase, IAuthUsecase} from "../../domain/usecase/auth_usecase";
import {User} from "../../domain/model/user";
import {createUserAPI} from "../../infra/api/service/user_api";
import {createApiClient, IApiClient} from "../../infra/api/client";
import {IUserRepository} from "../../domain/repository/user_repository";

const apiClient: IApiClient = createApiClient();
const userRepository: IUserRepository = createUserAPI(apiClient);
const authUsecase: IAuthUsecase = createAuthUsecase(userRepository);
const actionCreator: IAppActionCreator = createAppActionCreator();

function* handleSignOutInApp() {
  while (true) {
    const action: IRequestSignOutAction = yield take(AppActionType.REQUEST_SIGN_OUT);
    yield call(signOut);
    yield put(actionCreator.callbackSignOutAction(true));
  }
}

const signOut = (): Promise<void> => {
  return authUsecase.signOut();
};

function* handleGetLoginUserInApp() {
  while (true) {
    const action: IRequestGetLoginUserAction = yield take(AppActionType.REQUEST_GET_LOGIN_USER);
    const user: User | null = yield call(getLoginUser);
    yield put(actionCreator.callbackGetLoginUserAction(user));
  }
}

const getLoginUser = (): Promise<User | null> => {
  return authUsecase.getLoginUser();
};

export { handleSignOutInApp, handleGetLoginUserInApp };