import {createStore, applyMiddleware, Store, GenericStoreEnhancer} from "redux";
import loggerMiddleware from "redux-logger";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "../reducer/root_reducer";
import {RootState} from "./root_state";
import rootHandler from "../handler/root_handler";

const sagaMiddleware = createSagaMiddleware();

const middleware: GenericStoreEnhancer = applyMiddleware(
  loggerMiddleware,
  sagaMiddleware,
);

const createStoreWithMiddleware = middleware<RootState>(createStore);

const createAppStore = (): Store<RootState> => {
  const store: Store<RootState> = createStoreWithMiddleware(rootReducer);
  sagaMiddleware.run(rootHandler);
  return store;
};

export default createAppStore;