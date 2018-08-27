import {
  createMyPageActionCreator,
  IMyPageActionCreator,
  IRequestGetAssetAction,
  MyPageActionType,
} from "../action/mypage_action";
import {createApiClient, IApiClient} from "../../infra/api/client";
import {IAssetRepository} from "../../domain/repository/asset_repository";
import {createAssetAPI} from "../../infra/api/service/asset_api";
import {call, put, take} from "redux-saga/effects";
import {Asset} from "../../domain/model/asset";

const apiClient: IApiClient = createApiClient();
const assetRepository: IAssetRepository = createAssetAPI(apiClient);

const actionCreator: IMyPageActionCreator = createMyPageActionCreator();

function* handleGetAssetInMyPage() {
  while (true) {
    const action: IRequestGetAssetAction = yield take(MyPageActionType.REQUEST_GET_ASSET);
    const asset: Asset = yield call(getAsset);
    yield put(actionCreator.callbackGetAssetAction(true, asset));
  }
}

const getAsset = (): Promise<Asset> => {
  return assetRepository.get();
};

export {
  handleGetAssetInMyPage,
};