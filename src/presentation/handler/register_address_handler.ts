import {createApiClient, IApiClient} from "../../infra/api/client";
import {call, put, take} from "redux-saga/effects";
import {Address} from "../../domain/model/address";
import {IAddressRepository} from "../../domain/repository/address_repository";
import {createAddressAPI} from "../../infra/api/service/address_api";
import {createCurrencyAPI} from "../../infra/api/service/currency_api";
import {ICurrencyRepository} from "../../domain/repository/currency_repository";
import {Currency} from "../../domain/model/currency";
import {
  createRegisterAddressActionCreator,
  IRegisterAddressActionCreator,
  IRequestCreateAddressAction,
  IRequestGetAllCurrencyAction,
  RegisterAddressActionType,
} from "../action/register_address_action";

const apiClient: IApiClient = createApiClient();
const addressRepository: IAddressRepository = createAddressAPI(apiClient);
const currencyRepository: ICurrencyRepository = createCurrencyAPI(apiClient);
const actionCreator: IRegisterAddressActionCreator = createRegisterAddressActionCreator();

function* handleGetAllCurrencyInRegisterAddress() {
  while (true) {
    const action: IRequestGetAllCurrencyAction = yield take(RegisterAddressActionType.REQUEST_GET_ALL_CURRENCY);
    const currencies: Currency[] = yield call(getAllCurrency);
    yield put(actionCreator.callbackGetAllCurrencyAction(true, currencies));
  }
}

const getAllCurrency = (): Promise<Currency[]> => {
  return currencyRepository.getAll();
};

function* handleCreateAddressInRegisterAddress() {
  while (true) {
    const action: IRequestCreateAddressAction = yield take(RegisterAddressActionType.REQUEST_CREATE_ADDRESS);
    const address: Address = yield call(createAddress, action.item);
    yield put(actionCreator.callbackCreateAddressAction(true, address));
  }
}

const createAddress = (address: Address): Promise<Address> => {
  return addressRepository.create(address);
};

export {
  handleGetAllCurrencyInRegisterAddress,
  handleCreateAddressInRegisterAddress,
};