import * as React from "react";
import {Action, Dispatch} from "redux";
import {connect} from "react-redux";
import {RootState} from "../store/root_state";
import {css} from 'glamor';
import {theme} from "../color";
import {createAppDispatcher, IAppDispatcher} from "../dispatcher/app_dispatcher";
import {createAppActionCreator} from "../action/app_action";
import {AppState} from "../store/app_state";
import Drawer from 'react-motion-drawer';
import AuthFlowType from "../auth_flow";
import {DrawerMenuView, MenuAction} from "../component/drawer_menu";
import {browserHistory} from "react-router";

interface IProps {
  state: AppState;
  dispatcher: IAppDispatcher;
  router: any;
}

interface IState {
  authFlow: AuthFlowType;
  openMenu: boolean;
}

class Layout extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);

    this.state = {
      authFlow: AuthFlowType.NONE,
      openMenu: false,
    };
  }

  public componentWillMount() {
    this.props.dispatcher.getLoginUser();
  }

  public render(): JSX.Element {
    const {authState, user} = this.props.state;

    return (
      <div {...container}>
        <nav {...theme}>
          <div className="nav-wrapper ">
            {this.createLeftMenuButton()}
            {this.createMenuButtons()}
          </div>
        </nav>
        {this.props.children}
        <Drawer open={this.state.openMenu}
                width={300}
                onChange={this.onOpenMenu}
                drawerStyle={{backgroundColor: "white"}}>
          <DrawerMenuView authState={authState} user={user} handleAction={this.handleMenuAction}/>
        </Drawer>
      </div>
    );
  }

  private handleMenuAction = (action: MenuAction) => {
    this.setState({
      openMenu: false,
    });

    switch (action) {
      case MenuAction.TOP:
        this.props.router.push("/");
        break;
      case MenuAction.SIGNUP:
        this.props.router.push("/sign_up");
        break;
      case MenuAction.LOGIN:
        this.props.router.push("/login");
        break;
      case MenuAction.LOGOUT:
        this.props.dispatcher.signOut();
        break;
      case MenuAction.FOLLOWS:
        this.props.router.push("/follows");
        break;
      case MenuAction.FOLLOWERS:
        this.props.router.push("/followers");
        break;
      case MenuAction.ADDRESSES:
        this.props.router.push("/addresses");
        break;
      case MenuAction.USERS:
        this.props.router.push("/users");
        break;
      case MenuAction.MY_PAGE:
        this.props.router.push("/my_page");
        break;
    }
  }

  private moveToRegisterAddress = (): void => {
    this.props.router.push("/register_address");
  }

  private onOpenMenu = (open: boolean): void => {
    this.setState({
      openMenu: open,
    });
  }

  private toggleMenu = (event: any): void => {
    event.preventDefault();

    this.setState({
      openMenu: !this.state.openMenu,
    });
  }

  private createLeftMenuButton = (): JSX.Element => {
    const path = location.pathname.split("/");
    if (location.pathname === "/register_address") {
      return (
        <a href="#" onClick={this.back} className="large material-icons" {...menuButton}>arrow_back</a>
      );
    } else if (path.length === 3 && path[1] === "users") {
      return (
        <a href="#" onClick={this.back} className="large material-icons" {...menuButton}>arrow_back</a>
      );
    } else {
      return (
        <a href="#" onClick={this.toggleMenu} className="large material-icons" {...menuButton}>menu</a>
      );
    }
  }

  private back = (): void => {
    browserHistory.goBack();
  }

  private createMenuButtons = (): JSX.Element | null => {
    if (location.pathname === "/addresses") {
      return (
        <ul id="nav-mobile" className="right">
          <li onClick={this.moveToRegisterAddress}><i className="large material-icons" {...addButton}>add</i></li>
        </ul>
      );
    } else {
      return null;
    }
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

const container = css({
  height: "100%",
});

const menuButton = css({
  width: 80,
  paddingLeft: 20,
  height: 40,
  paddingTop: 15,
});

const addButton = css({
  paddingRight: 20,
  paddingLeft: 20,
});