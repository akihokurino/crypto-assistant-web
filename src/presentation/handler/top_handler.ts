import {ICurrencyRepository} from "../../domain/repository/currency_repository";
import {IRequestGetAllCurrencyAction, ITopActionCreator, TopActionType} from "../action/top_action";
import {call, put, take} from "redux-saga/effects";
import {Currency} from "../../domain/model/currency";
import {createApiClient} from "../../infra/api/client";

function* handleGetAllCurrency(actionCreator: ITopActionCreator, repository: ICurrencyRepository) {

  while (true) {
    const action: IRequestGetAllCurrencyAction = yield take(TopActionType.REQUEST_GET_ALL_CURRENCY);
    const currencies: Currency[] | null = yield call(repository.getAll, createApiClient());
    if (currencies) {
      yield put(actionCreator.successGetAllCurrencyAction(currencies));
    } else {
      yield put(actionCreator.errorGetAllCurrencyAction());
    }
  }
}

export { handleGetAllCurrency };