import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {browserHistory, Route, Router, IndexRoute} from "react-router";
import createAppStore from "./store/app_store";
import Top from './container/top';
import Layout from './container/layout';
import Follows from './container/follow_list';
import Followers from './container/follower_list';
import Users from './container/user_list';
import User from './container/user_detail';
import Auth from './container/auth';
import Addresses from './container/address_list';
import MyPage from './container/mypage';
import RegisterAddress from './container/register_address';
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
        <Route path="/users/:id" component={User} />
        <Route path="/login" component={Auth} />
        <Route path="/sign_up" component={Auth} />
        <Route path="/addresses" component={Addresses} />
        <Route path="/my_page" component={MyPage} />
        <Route path="/register_address" component={RegisterAddress} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
