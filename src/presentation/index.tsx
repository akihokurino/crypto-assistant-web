import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {browserHistory, Route, Router, IndexRoute} from "react-router";
import createAppStore from "./store/app_store";
import Top from './container/top';
import Layout from './container/layout';
import Follows from './container/follows';
import Followers from './container/followers';
import Users from './container/users';
import Auth from './container/auth';
import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyCMz7HbTJgVVY60jziqatSLS7t1l7KTjiI",
  authDomain: "crypto-assistant-dev.firebaseapp.com",
  databaseURL: "https://crypto-assistant-dev.firebaseio.com",
  projectId: "crypto-assistant-dev",
  storageBucket: "crypto-assistant-dev.appspot.com",
  messagingSenderId: "957721393718",
});

ReactDOM.render(
  <Provider store={createAppStore()}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Top} />
        <Route path="/follows" component={Follows} />
        <Route path="/followers" component={Followers} />
        <Route path="/users" component={Users} />
        <Route path="/login" component={Auth} />
        <Route path="/sign_up" component={Auth} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
