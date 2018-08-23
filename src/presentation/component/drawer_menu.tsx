import * as React from "react";
import {AuthStateType} from "../store/app_state";
import {User} from "../../domain/model/user";
import Assets from "../assets/assets";

interface IProps {
  authState: AuthStateType;
  user: User | null;
  handleAction: (action: MenuAction) => void;
}

enum MenuAction {
  SIGNUP = "SIGNUP",
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

const DrawerMenuView: React.StatelessComponent<IProps> = (props) => {
  const {authState, user} = props;

  switch (authState) {
    case AuthStateType.LOGIN_USER:
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
            <a href="#" className="collection-item active">Top</a>
            <a href="#" className="collection-item">Address</a>
            <a href="#" className="collection-item">Follow</a>
            <a href="#" className="collection-item">Follower</a>
            <a href="#" onClick={props.handleAction.bind(this, MenuAction.LOGOUT)} className="collection-item">Logout</a>
          </div>
          <img src={Assets.sample} width="100%" alt=""/>
        </div>
      );
    case AuthStateType.GUEST:
      return (
        <div>
          <div className="card blue-grey darken-1" style={{margin: 0}}>
            <div className="card-content white-text">
              <span className="card-title">Crypto</span>
              <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#" onClick={props.handleAction.bind(this, MenuAction.SIGNUP)}>SignUp</a>
              <a href="#" onClick={props.handleAction.bind(this, MenuAction.LOGIN)}>Login</a>
            </div>
          </div>
          <img src={Assets.sample} width="100%" alt=""/>
        </div>
      );
    case AuthStateType.UNKNOWN:
      return null;
  }
};

export {DrawerMenuView, MenuAction};