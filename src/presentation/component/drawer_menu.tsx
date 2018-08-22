import * as React from "react";
import {AuthState} from "../store/app_state";
import {Link} from 'react-router';
import {User} from "../../domain/model/user";
import {css} from 'glamor';
import Assets from "../assets/assets";

interface IProps {
  authState: AuthState;
  user: User | null;
}

const DrawerMenuView: React.StatelessComponent<IProps> = (props) => {
  const {authState, user} = props;

  switch (authState) {
    case AuthState.LOGIN_USER:
      if (user == null) {
        return null;
      }
      return (
        <div>
          <div className="card blue-grey darken-1" style={{padding: 0, margin: 0}}>
            <div className="card-content row valign-wrapper" style={{marginBottom: 0, padding: 10}}>
              <div className="col s3">
                <img src={user.iconURL} alt="" className="circle responsive-img"/>
              </div>
              <div className="col s9">
                <span className="white-text">{user.username}</span>
              </div>
            </div>
          </div>
          <div className="collection" style={{margin: 0}}>
            <a href="#!" className="collection-item active">Top</a>
            <a href="#!" className="collection-item">Address</a>
            <a href="#!" className="collection-item">Follow</a>
            <a href="#!" className="collection-item">Follower</a>
            <a href="#!" className="collection-item">Logout</a>
          </div>
          <img src={Assets.sample} width="100%" alt=""/>
        </div>
      );
    case AuthState.GUEST:
      return (
        <div>
          <div className="card blue-grey darken-1" style={{margin: 0}}>
            <div className="card-content white-text">
              <span className="card-title">Crypto</span>
              <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">SignUp</a>
              <a href="#">Login</a>
            </div>
          </div>
          <img src={Assets.sample} width="100%" alt=""/>
        </div>
      );
    case AuthState.UNKNOWN:
      return null;
  }
};

export default DrawerMenuView;

const link = css({
  color: "#ffab40",
});