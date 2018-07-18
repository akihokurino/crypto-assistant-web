import {ICurrencyRepository} from "../../domain/repository/currency_repository";
import {
  createTopActionCreator,
  IRequestGetAllCurrencyAction,
  ITopActionCreator,
  TopActionType,
} from "../action/top_action";
import {call, put, take} from "redux-saga/effects";
import {Currency} from "../../domain/model/currency";
import {createApiClient, IApiClient} from "../../infra/api/client";
import {createCurrencyRepository} from "../../infra/api/service/currency_api";

const apiClient: IApiClient = createApiClient();
const currencyRepository: ICurrencyRepository = createCurrencyRepository(apiClient);
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

export { handleGetAllCurrencyInTop };