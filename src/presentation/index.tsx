import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {browserHistory, Route, Router, IndexRoute} from "react-router";
import createAppStore from "./store/app_store";
import Top from './container/top';
import Layout from './container/layout';

ReactDOM.render(
  <Provider store={createAppStore()}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Top} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
