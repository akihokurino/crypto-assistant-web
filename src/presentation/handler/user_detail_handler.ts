import {call, put, take} from "redux-saga/effects";
import {createApiClient, IApiClient} from "../../infra/api/client";
import {IPortfolioRepository} from "../../domain/repository/portfolio_repository";
import {createPortfolioAPI} from "../../infra/api/service/portfolio_api";
import {Portfolio} from "../../domain/model/portfolio";
import {IUserRepository} from "../../domain/repository/user_repository";
import {createUserAPI} from "../../infra/api/service/user_api";
import {
  createUserDetailActionCreator,
  IRequestGetPortfolioAction,
  IRequestGetUserAction,
  IUserDetailActionCreator,
  UserDetailActionType,
} from "../action/user_detail_action";
import {User} from "../../domain/model/user";

const apiClient: IApiClient = createApiClient();
const userRepository: IUserRepository = createUserAPI(apiClient);
const portfolioRepository: IPortfolioRepository = createPortfolioAPI(apiClient);
const actionCreator: IUserDetailActionCreator = createUserDetailActionCreator();

function* handleGetUserInUserDetail() {
  while (true) {
    const action: IRequestGetUserAction = yield take(UserDetailActionType.REQUEST_GET_USER);
    const user: User = yield call(getUser, action.userId);
    yield put(actionCreator.callbackGetUserAction(true, user));
  }
}

const getUser = (userId: string): Promise<User> => {
  return userRepository.get(userId);
};

function* handleGetPortfolioInUserDetail() {
  while (true) {
    const action: IRequestGetPortfolioAction = yield take(UserDetailActionType.REQUEST_GET_PORTFOLIO);
    const portfolios = yield call(getPortfolio, action.userId);
    yield put(actionCreator.callbackGetPortfolioAction(true, portfolios));
  }
}

const getPortfolio = (userId: string): Promise<Portfolio[]> => {
  return portfolioRepository.getAll(userId);
};

export { handleGetUserInUserDetail, handleGetPortfolioInUserDetail };