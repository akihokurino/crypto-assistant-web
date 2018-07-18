import {createApiClient, IApiClient} from "../../infra/api/client";
import {IAssetRepository} from "../../domain/repository/asset_repository";
import {createAssetAPI} from "../../infra/api/service/asset_api";
import {
  createMenuActionCreator,
  IMenuActionCreator, IRequestGetAddressAction, IRequestGetAllCurrencyAction,
  IRequestGetAssetAction,
  MenuActionType,
} from "../action/menu_action";
import {call, put, take} from "redux-saga/effects";
import {Asset} from "../../domain/model/asset";
import {Address} from "../../domain/model/address";
import {IAddressRepository} from "../../domain/repository/address_repository";
import {createAddressAPI} from "../../infra/api/service/address_api";
import {createCurrencyRepository} from "../../infra/api/service/currency_api";
import {ICurrencyRepository} from "../../domain/repository/currency_repository";
import {Currency} from "../../domain/model/currency";

const apiClient: IApiClient = createApiClient();
const assetRepository: IAssetRepository = createAssetAPI(apiClient);
const addressRepository: IAddressRepository = createAddressAPI(apiClient);
const currencyRepository: ICurrencyRepository = createCurrencyRepository(apiClient);
const actionCreator: IMenuActionCreator = createMenuActionCreator();

function* handleGetAsset() {
  while (true) {
    const action: IRequestGetAssetAction = yield take(MenuActionType.REQUEST_GET_ASSET);
    const asset: Asset = yield call(getAsset);
    yield put(actionCreator.callbackGetAssetAction(true, asset));
  }
}

const getAsset = (): Promise<Asset> => {
  return assetRepository.get();
};

function* handleGetAddress() {
  while (true) {
    const action: IRequestGetAddressAction = yield take(MenuActionType.REQUEST_GET_ADDRESS);
    const addresses: Address[] = yield call(getAddress);
    yield put(actionCreator.callbackGetAddressAction(true, addresses));
  }
}

const getAddress = (): Promise<Address[]> => {
  return addressRepository.getAllOfMe();
};

function* handleGetAllCurrencyInMenu() {
  while (true) {
    const action: IRequestGetAllCurrencyAction = yield take(MenuActionType.REQUEST_GET_ALL_CURRENCY);
    const currencies: Currency[] = yield call(getAllCurrency);
    yield put(actionCreator.callbackGetAllCurrencyAction(true, currencies));
  }
}

const getAllCurrency = (): Promise<Currency[]> => {
  return currencyRepository.getAll();
};

export { handleGetAsset, handleGetAddress, handleGetAllCurrencyInMenu };