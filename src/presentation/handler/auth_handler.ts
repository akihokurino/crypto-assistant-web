import {call, put, take} from "redux-saga/effects";
import {
  IRequestSignInAction,
  IRequestSignUpAction,
} from "../action/auth_action";
import {createAuthUsecase, IAuthUsecase} from "../../domain/usecase/auth_usecase";
import {User} from "../../domain/model/user";
import {createUserAPI} from "../../infra/api/service/user_api";
import {createApiClient, IApiClient} from "../../infra/api/client";
import {IUserRepository} from "../../domain/repository/user_repository";
import {AuthActionType, createAuthActionCreator, IAuthActionCreator} from "../action/auth_action";
import {createAppActionCreator, IAppActionCreator} from "../action/app_action";

const apiClient: IApiClient = createApiClient();
const userRepository: IUserRepository = createUserAPI(apiClient);
const authUsecase: IAuthUsecase = createAuthUsecase(userRepository);
const actionCreator: IAuthActionCreator = createAuthActionCreator();
const appActionCreator: IAppActionCreator = createAppActionCreator();

function* handleSignUpInAuth() {
  while (true) {
    const action: IRequestSignUpAction = yield take(AuthActionType.REQUEST_SIGN_UP);
    const user: User = yield call(signUp, action.username, action.email, action.password);
    yield put(actionCreator.callbackSignUpAction(true, user));
    yield put(appActionCreator.callbackSignUpAction(true, user));
  }
}

const signUp = (username: string, email: string, password: string): Promise<User> => {
  return authUsecase.signUp(username, email, password);
};

function* handleSignInInAuth() {
  while (true) {
    const action: IRequestSignInAction = yield take(AuthActionType.REQUEST_SIGN_IN);
    const user: User = yield call(signIn, action.email, action.password);
    yield put(actionCreator.callbackSignInAction(true, user));
    yield put(appActionCreator.callbackSignInAction(true, user));
  }
}

const signIn = (email: string, password: string): Promise<User> => {
  return authUsecase.signIn(email, password);
};

export { handleSignUpInAuth, handleSignInInAuth };