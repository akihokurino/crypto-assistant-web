import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {browserHistory, Route, Router} from "react-router";
import createAppStore from "./store/app_store";
import Top from './container/top';
// import registerServiceWorker from '../registerServiceWorker';

ReactDOM.render(
  <Provider store={createAppStore()}>
    <Router history={browserHistory}>
      <Route path="/" component={Top} />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
// registerServiceWorker();
