import * as React from "react";
import {Action, Dispatch} from "redux";
import {connect} from "react-redux";
import {RootState} from "../store/root_state";
import {css} from 'glamor';
import {theme} from "../color";
import * as ReactModal from 'react-modal';
import {createAppDispatcher, IAppDispatcher} from "../dispatcher/app_dispatcher";
import {createAppActionCreator} from "../action/app_action";
import {AppState} from "../store/app_state";
import {createAuthUsecase, IAuthUsecase} from "../../domain/usecase/auth_usecase";
import {createUserAPI} from "../../infra/api/service/user_api";
import {createApiClient} from "../../infra/api/client";

interface IProps {
  state: AppState;
  dispatcher: IAppDispatcher;
  authUsecase: IAuthUsecase;
}

interface IState {
  modalIsOpen: boolean;
  form: {
    username: string;
    email: string;
    password: string;
  };
}

ReactModal.setAppElement('#root');

class Layout extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      modalIsOpen: false,
      form: {
        username: "",
        email: "",
        password: "",
      },
    };

    this.signUp = this.signUp.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createMenuButtons = this.createMenuButtons.bind(this);
  }

  public render(): JSX.Element {
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
          <div className="col s3"></div>
        </div>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={modal}
          contentLabel="Example Modal">
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
        </ReactModal>
      </div>
    );
  }

  private createMenuButtons(): JSX.Element {
    if (this.props.authUsecase.isLogin()) {
      return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#" onClick={this.openModal}>SignUp</a></li>
          <li><a href="#">SignIn</a></li>
        </ul>
      );
    } else {
      return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#">SignOut</a></li>
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

  private openModal(): void {
    this.setState({
      modalIsOpen: true,
    });
  }

  private afterOpenModal(): void {
    // // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  private closeModal(): void {
    this.setState({
      modalIsOpen: false,
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
    authUsecase: createAuthUsecase(createUserAPI(createApiClient())),
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
