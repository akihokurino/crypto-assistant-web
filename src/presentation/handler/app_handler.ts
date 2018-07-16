import {call, put, take} from "redux-saga/effects";
import {AppActionType, createAppActionCreator, IAppActionCreator, IRequestSignUpAction} from "../action/app_action";
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
    yield put(actionCreator.successSignUpAction(user));
  }
}

const signUp = (username: string, email: string, password: string): Promise<User> => {
  return authUsecase.signUp(username, email, password);
};

export { handleSignUp };