import {createApiClient, IApiClient} from "../../infra/api/client";
import {IAssetRepository} from "../../domain/repository/asset_repository";
import {createAssetAPI} from "../../infra/api/service/asset_api";
import {
  createMenuActionCreator,
  IMenuActionCreator,
  IRequestCreateAddressAction,
  IRequestDeleteAddressAction,
  IRequestGetAddressAction,
  IRequestGetAllCurrencyAction,
  IRequestGetAssetAction,
  MenuActionType,
} from "../action/menu_action";
import {call, put, take} from "redux-saga/effects";
import {Asset} from "../../domain/model/asset";
import {Address} from "../../domain/model/address";
import {IAddressRepository} from "../../domain/repository/address_repository";
import {createAddressAPI} from "../../infra/api/service/address_api";
import {createCurrencyAPI} from "../../infra/api/service/currency_api";
import {ICurrencyRepository} from "../../domain/repository/currency_repository";
import {Currency} from "../../domain/model/currency";

const apiClient: IApiClient = createApiClient();
const assetRepository: IAssetRepository = createAssetAPI(apiClient);
const addressRepository: IAddressRepository = createAddressAPI(apiClient);
const currencyRepository: ICurrencyRepository = createCurrencyAPI(apiClient);
const actionCreator: IMenuActionCreator = createMenuActionCreator();

function* handleGetAssetInMenu() {
  while (true) {
    const action: IRequestGetAssetAction = yield take(MenuActionType.REQUEST_GET_ASSET);
    const asset: Asset = yield call(getAsset);
    yield put(actionCreator.callbackGetAssetAction(true, asset));
  }
}

const getAsset = (): Promise<Asset> => {
  return assetRepository.get();
};

function* handleGetAddressInMenu() {
  while (true) {
    const action: IRequestGetAddressAction = yield take(MenuActionType.REQUEST_GET_ADDRESS);
    const addresses: Address[] = yield call(getAddress);
    yield put(actionCreator.callbackGetAddressAction(true, addresses));
  }
}

const getAddress = (): Promise<Address[]> => {
  return addressRepository.getAll(null);
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

function* handleCreateAddressInMenu() {
  while (true) {
    const action: IRequestCreateAddressAction = yield take(MenuActionType.REQUEST_CREATE_ADDRESS);
    const address: Address = yield call(createAddress, action.item);
    yield put(actionCreator.callbackCreateAddressAction(true, address));
  }
}

const createAddress = (address: Address): Promise<Address> => {
  return addressRepository.create(address);
};

function* handleDeleteAddressInMenu() {
  while (true) {
    const action: IRequestDeleteAddressAction = yield take(MenuActionType.REQUEST_DELETE_ADDRESS);
    yield call(deleteAddress, action.item);
    yield put(actionCreator.callbackDeleteAddressAction(true));
  }
}

const deleteAddress = (address: Address): Promise<void> => {
  return addressRepository.delete(address);
};

export {
  handleGetAssetInMenu,
  handleGetAddressInMenu,
  handleGetAllCurrencyInMenu,
  handleCreateAddressInMenu,
  handleDeleteAddressInMenu,
};