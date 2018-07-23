import {ICurrencyRepository} from "../../domain/repository/currency_repository";
import {
  createTopActionCreator,
  IRequestGetAllCurrencyAction, IRequestGetPortfolioAction,
  ITopActionCreator,
  TopActionType,
} from "../action/top_action";
import {call, put, take} from "redux-saga/effects";
import {Currency} from "../../domain/model/currency";
import {createApiClient, IApiClient} from "../../infra/api/client";
import {createCurrencyAPI} from "../../infra/api/service/currency_api";
import {IPortfolioRepository} from "../../domain/repository/portfolio_repository";
import {createPortfolioAPI} from "../../infra/api/service/portfolio_api";
import {Portfolio} from "../../domain/model/portfolio";

const apiClient: IApiClient = createApiClient();
const currencyRepository: ICurrencyRepository = createCurrencyAPI(apiClient);
const portfolioRepository: IPortfolioRepository = createPortfolioAPI(apiClient);
const actionCreator: ITopActionCreator = createTopActionCreator();

function* handleGetAllCurrencyInTop() {
  while (true) {
    const action: IRequestGetAllCurrencyAction = yield take(TopActionType.REQUEST_GET_ALL_CURRENCY);
    const currencies: Currency[] = yield call(getAllCurrency);
    yield put(actionCreator.callbackGetAllCurrencyAction(true, currencies));
  }
}

const getAllCurrency = (): Promise<Currency[]> => {
  return currencyRepository.getAll();
};

function* handleGetPortfolioInTop() {
  while (true) {
    const action: IRequestGetPortfolioAction = yield take(TopActionType.REQUEST_GET_PORTFOLIO);
    const portfolios = yield call(getPortfolio);
    yield put(actionCreator.callbackGetPortfolioAction(true, portfolios));
  }
}

const getPortfolio = (): Promise<Portfolio[]> => {
  return portfolioRepository.getMine();
};

export { handleGetAllCurrencyInTop, handleGetPortfolioInTop };