import * as React from "react";
import {Action, Dispatch} from "redux";
import {connect} from "react-redux";
import {RootState} from "../store/root_state";
import {css} from 'glamor';
import {theme} from "../color";
import * as ReactModal from 'react-modal';
import {createAppDispatcher, IAppDispatcher} from "../dispatcher/app_dispatcher";
import {createAppActionCreator} from "../action/app_action";
import {AppState, AuthState} from "../store/app_state";

interface IProps {
  state: AppState;
  dispatcher: IAppDispatcher;
}

interface IState {
  modalIsOpen: boolean;
  authFlow: AuthFlowType;
  form: {
    username: string;
    email: string;
    password: string;
  };
}

ReactModal.setAppElement('#root');

enum AuthFlowType {
  NONE = "NONE",
  SIGN_UP = "SIGN_UP",
  SIGN_IN = "SIGN_IN",
}

class Layout extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      modalIsOpen: false,
      authFlow: AuthFlowType.NONE,
      form: {
        username: "",
        email: "",
        password: "",
      },
    };

    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
    this.openSignUpModal = this.openSignUpModal.bind(this);
    this.openSignInModal = this.openSignInModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createMenuButtons = this.createMenuButtons.bind(this);
    this.createForm = this.createForm.bind(this);
  }

  public componentWillMount() {
    this.props.dispatcher.getLoginUser();
  }

  public render(): JSX.Element {
    const { user } = this.props.state;

    if (user && this.state.modalIsOpen) {
      this.setState({
        modalIsOpen: false,
      });
    }

    return (
      <div>
        <nav {...theme}>
          <div className="nav-wrapper ">
            {this.createMenuButtons()}
          </div>
        </nav>
        <div className="row" {...main}>
          <div className="col s3" {...menu} style={{padding: 0}}>
          </div>
          <div className="col s6" {...content} style={{paddingTop: 0}}>
            {this.props.children}
          </div>
          <div className="col s3">
          </div>
        </div>
        <ReactModal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={modal}>
          {this.createForm()}
        </ReactModal>
      </div>
    );
  }

  private createForm(): JSX.Element | null {
    switch (this.state.authFlow) {
      case AuthFlowType.NONE:
        return null;
      case AuthFlowType.SIGN_UP:
        return (
          <div className="row">
            <form className="col s12" onSubmit={this.signUp}>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    id="username"
                    type="text"
                    name="username"
                    className="validate"
                    value={this.state.form.username}
                    onChange={this.handleChange}/>
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
                    onChange={this.handleChange}/>
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
                    onChange={this.handleChange}/>
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="row">
                <button className="btn waves-effect waves-light col s12" type="submit" name="action">
                  送信
                </button>
              </div>
            </form>
          </div>
        );
      case AuthFlowType.SIGN_IN:
        return (
          <div className="row">
            <form className="col s12" onSubmit={this.signIn}>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">email</i>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="validate"
                    value={this.state.form.email}
                    onChange={this.handleChange}/>
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
                    onChange={this.handleChange}/>
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="row">
                <button className="btn waves-effect waves-light col s12" type="submit" name="action">
                  送信
                </button>
              </div>
            </form>
          </div>
        );
    }
  }

  private createMenuButtons(): JSX.Element | null {
    const { authState } = this.props.state;
    switch (authState) {
      case AuthState.UNKNOWN:
        return null;
      case AuthState.GUEST:
        return (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#" onClick={this.openSignUpModal}>SignUp</a></li>
            <li><a href="#" onClick={this.openSignInModal}>SignIn</a></li>
          </ul>
        );
      case AuthState.LOGIN_USER:
        return (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#" onClick={this.signOut}>SignOut</a></li>
          </ul>
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

  private signOut(): void {
    this.props.dispatcher.signOut();
  }

  private openSignUpModal(): void {
    this.setState({
      modalIsOpen: true,
      authFlow: AuthFlowType.SIGN_UP,
      form: {
        username: "",
        email: "",
        password: "",
      },
    });
  }

  private openSignInModal(): void {
    this.setState({
      modalIsOpen: true,
      authFlow: AuthFlowType.SIGN_IN,
      form: {
        username: "",
        email: "",
        password: "",
      },
    });
  }

  private closeModal(): void {
    this.setState({
      modalIsOpen: false,
      authFlow: AuthFlowType.NONE,
      form: {
        username: "",
        email: "",
        password: "",
      },
    });
  }
}

const mapStateToProps = (state: RootState): Partial<IProps> => {
  return {
    state: state.appReducer,
  } as Partial<IProps>;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): Partial<IProps> => {
  return {
    dispatcher: createAppDispatcher(dispatch, createAppActionCreator()),
  } as Partial<IProps>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

const main = css({
  marginBottom: 0,
});

const menu = css({
  width: 250,
  marginLeft: 10,
  height: 1500,
  backgroundColor: "#121b25",
});

const content = css({
  marginTop: 4,
});

const modal = {
  content: {
    width: 500,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
