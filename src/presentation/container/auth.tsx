import 'rmc-tabs/assets/index.css';

import * as React from "react";
import {RootState} from "../store/root_state";
import {Action, Dispatch} from "redux";
import {connect} from "react-redux";
import {AuthState} from "../store/auth_state";
import {css} from "glamor";
import {createAuthDispatcher, IAuthDispatcher} from "../dispatcher/auth_dispatcher";
import {createAuthActionCreator} from "../action/auth_action";
import AuthFlowType from "../auth_flow";
import {AuthStateType} from "../store/app_state";

interface IProps {
  authState: AuthStateType;
  state: AuthState;
  dispatcher: IAuthDispatcher;
}

interface IState {
  authFlow: AuthFlowType;
  form: {
    username: string;
    email: string;
    password: string;
  };
}

class Auth extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      authFlow: location.pathname === "/sign_up" ? AuthFlowType.SIGN_UP : AuthFlowType.SIGN_IN,
      form: {
        username: "",
        email: "",
        password: "",
      },
    };
  }

  public render(): JSX.Element {
    const {authState} = this.props;

    if (authState === AuthStateType.LOGIN_USER) {
      location.href = "/";
    }

    return (
      <div {...container}>
        {this.createForm()}
      </div>
    );
  }

  private createForm = (): JSX.Element | null => {
    switch (this.state.authFlow) {
      case AuthFlowType.NONE:
        return null;
      case AuthFlowType.SIGN_UP:
        return (
          <div className="row" style={{padding: 20}}>
            <form className="col s12" onSubmit={this.signUp.bind(this)}>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    id="username"
                    type="text"
                    name="username"
                    className="validate"
                    value={this.state.form.username}
                    onChange={this.handleChange.bind(this)}/>
                  <label htmlFor="username">Username</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">email</i>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="validate"
                    value={this.state.form.email}
                    onChange={this.handleChange.bind(this)}/>
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">security</i>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="validate"
                    value={this.state.form.password}
                    onChange={this.handleChange.bind(this)}/>
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="row">
                <button className="btn waves-effect waves-light col s12" type="submit" name="action">
                  SignUp
                </button>
              </div>
            </form>
          </div>
        );
      case AuthFlowType.SIGN_IN:
        return (
          <div className="row" style={{padding: 20}}>
            <form className="col s12" onSubmit={this.signIn.bind(this)}>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">email</i>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="validate"
                    value={this.state.form.email}
                    onChange={this.handleChange.bind(this)}/>
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">security</i>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="validate"
                    value={this.state.form.password}
                    onChange={this.handleChange.bind(this)}/>
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="row">
                <button className="btn waves-effect waves-light col s12" type="submit" name="action">
                  Login
                </button>
              </div>
            </form>
          </div>
        );
    }
  }

  private handleChange(event: any): void {
    const data = this.state.form;

    switch (event.target.name) {
      case 'username':
        data.username = event.target.value;
        break;
      case 'email':
        data.email = event.target.value;
        break;
      case 'password':
        data.password = event.target.value;
        break;
    }

    this.setState({
      form: data,
    });
  }

  private signUp(event: any): boolean {
    event.preventDefault();
    const username = this.state.form.username;
    const email = this.state.form.email;
    const password = this.state.form.password;
    this.props.dispatcher.signUp(username, email, password);
    return false;
  }

  private signIn(event: any): boolean {
    event.preventDefault();
    const email = this.state.form.email;
    const password = this.state.form.password;
    this.props.dispatcher.signIn(email, password);
    return false;
  }

}

const mapStateToProps = (state: RootState): Partial<IProps> => {
  return {
    authState: state.appReducer.authState,
    state: state.authReducer,
  } as Partial<IProps>;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): Partial<IProps> => {
  return {
    dispatcher: createAuthDispatcher(dispatch, createAuthActionCreator()),
  } as Partial<IProps>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

const container = css({
  height: window.innerHeight - 56,
});
