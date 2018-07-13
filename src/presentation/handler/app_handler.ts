import {fork} from "redux-saga/effects";
import {handleGetAllCurrency} from "./top_handler";
import {createActionCreator} from "../action/top_action";
import {createCurrencyRepository} from "../../infra/api/service/currency_api";

function* appHandler() {
  yield fork(handleGetAllCurrency, createActionCreator(), createCurrencyRepository());
}

export { appHandler };