import {createStore, applyMiddleware, Store, GenericStoreEnhancer} from "redux";
import loggerMiddleware from "redux-logger";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "../reducer/app_reducer";
import {AppState} from "./app_state";
import rootHandler from "../handler/app_handler";

const sagaMiddleware = createSagaMiddleware();

const middleware: GenericStoreEnhancer = applyMiddleware(
  loggerMiddleware,
  sagaMiddleware,
);

const createStoreWithMiddleware = middleware<AppState>(createStore);

const createAppStore = (): Store<AppState> => {
  const store: Store<AppState> = createStoreWithMiddleware(rootReducer);
  sagaMiddleware.run(rootHandler);
  return store;
};

export default createAppStore;