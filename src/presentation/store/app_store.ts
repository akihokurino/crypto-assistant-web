import {createStore, applyMiddleware, Store, GenericStoreEnhancer} from "redux";
import loggerMiddleware from "redux-logger";
import createSagaMiddleware from 'redux-saga';
import appReducer from "../reducer/app_reducer";
import {AppState} from "./app_state";
import {appHandler} from "../handler/app_handler";

const sagaMiddleware = createSagaMiddleware();

const middleware: GenericStoreEnhancer = applyMiddleware(
  loggerMiddleware,
  sagaMiddleware,
);

const createStoreWithMiddleware = middleware<AppState>(createStore);

const createAppStore = (): Store<AppState> => {
  const store: Store<AppState> = createStoreWithMiddleware(appReducer);
  sagaMiddleware.run(appHandler);
  return store;
};

export default createAppStore;