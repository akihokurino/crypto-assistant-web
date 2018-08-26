import {
  AddressesActionType,
  createAddressesActionCreator,
  IAddressesActionCreator, IRequestDeleteAddressAction,
  IRequestGetAddressAction,
} from "../action/address_action";
import {createAddressAPI} from "../../infra/api/service/address_api";
import {IAddressRepository} from "../../domain/repository/address_repository";
import {createApiClient, IApiClient} from "../../infra/api/client";
import {call, put, take} from "redux-saga/effects";
import {Address} from "../../domain/model/address";

const apiClient: IApiClient = createApiClient();
const addressRepository: IAddressRepository = createAddressAPI(apiClient);
const actionCreator: IAddressesActionCreator = createAddressesActionCreator();

function* handleGetAddressInMenu() {
  while (true) {
    const action: IRequestGetAddressAction = yield take(AddressesActionType.REQUEST_GET_ADDRESS);
    const addresses: Address[] = yield call(getAddress);
    yield put(actionCreator.callbackGetAddressAction(true, addresses));
  }
}

const getAddress = (): Promise<Address[]> => {
  return addressRepository.getAll(null);
};

function* handleDeleteAddressInMenu() {
  while (true) {
    const action: IRequestDeleteAddressAction = yield take(AddressesActionType.REQUEST_DELETE_ADDRESS);
    yield call(deleteAddress, action.item);
    yield put(actionCreator.callbackDeleteAddressAction(true));
  }
}

const deleteAddress = (address: Address): Promise<void> => {
  return addressRepository.delete(address);
};

export {
  handleGetAddressInMenu,
  handleDeleteAddressInMenu,
};