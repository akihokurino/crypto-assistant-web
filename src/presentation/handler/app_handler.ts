import {call, put, take} from "redux-saga/effects";
import {
  AppActionType,
  createAppActionCreator,
  IAppActionCreator, IRequestGetLoginUserAction,
  IRequestSignInAction, IRequestSignOutAction,
  IRequestSignUpAction,
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

function* handleSignUp() {
  while (true) {
    const action: IRequestSignUpAction = yield take(AppActionType.REQUEST_SIGN_UP);
    const user: User = yield call(signUp, action.username, action.email, action.password);
    yield put(actionCreator.callbackSignUpAction(true, user));
  }
}

const signUp = (username: string, email: string, password: string): Promise<User> => {
  return authUsecase.signUp(username, email, password);
};

function* handleSignIn() {
  while (true) {
    const action: IRequestSignInAction = yield take(AppActionType.REQUEST_SIGN_IN);
    const user: User = yield call(signIn, action.email, action.password);
    yield put(actionCreator.callbackSignInAction(true, user));
  }
}

const signIn = (email: string, password: string): Promise<User> => {
  return authUsecase.signIn(email, password);
};

function* handleSignOut() {
  while (true) {
    const action: IRequestSignOutAction = yield take(AppActionType.REQUEST_SIGN_OUT);
    yield call(signOut);
    yield put(actionCreator.callbackSignOutAction(true));
  }
}

const signOut = (): Promise<void> => {
  return authUsecase.signOut();
};

function* handleGetLoginUser() {
  while (true) {
    const action: IRequestGetLoginUserAction = yield take(AppActionType.REQUEST_GET_LOGIN_USER);
    const user: User | null = yield call(getLoginUser);
    yield put(actionCreator.callbackGetLoginUserAction(user));
  }
}

const getLoginUser = (): Promise<User | null> => {
  return authUsecase.getLoginUser();
};

export { handleSignUp, handleSignIn, handleSignOut, handleGetLoginUser };