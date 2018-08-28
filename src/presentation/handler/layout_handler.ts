import {call, put, take} from "redux-saga/effects";
import {
  LayoutActionType,
  createLayoutActionCreator,
  ILayoutActionCreator,
  IRequestGetLoginUserAction,
  IRequestSignOutAction,
} from "../action/layout_action";
import {createAuthUsecase, IAuthUsecase} from "../../domain/usecase/auth_usecase";
import {User} from "../../domain/model/user";
import {createUserAPI} from "../../infra/api/service/user_api";
import {createApiClient, IApiClient} from "../../infra/api/client";
import {IUserRepository} from "../../domain/repository/user_repository";

const apiClient: IApiClient = createApiClient();
const userRepository: IUserRepository = createUserAPI(apiClient);
const authUsecase: IAuthUsecase = createAuthUsecase(userRepository);
const actionCreator: ILayoutActionCreator = createLayoutActionCreator();

function* handleSignOutInLayout() {
  while (true) {
    const action: IRequestSignOutAction = yield take(LayoutActionType.REQUEST_SIGN_OUT);
    yield call(signOut);
    yield put(actionCreator.callbackSignOutAction(true));
  }
}

const signOut = (): Promise<void> => {
  return authUsecase.signOut();
};

function* handleGetLoginUserInLayout() {
  while (true) {
    const action: IRequestGetLoginUserAction = yield take(LayoutActionType.REQUEST_GET_LOGIN_USER);
    const user: User | null = yield call(getLoginUser);
    yield put(actionCreator.callbackGetLoginUserAction(user));
  }
}

const getLoginUser = (): Promise<User | null> => {
  return authUsecase.getLoginUser();
};

export { handleSignOutInLayout, handleGetLoginUserInLayout };