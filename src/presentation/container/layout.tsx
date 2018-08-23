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
            <a href="#" className="menu-button">
              <i onClick={this.toggleMenu} className="large material-icons" {...menuButton}>menu</i>
            </a>
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
    }
  }

  private onOpenMenu = (open: boolean) => {
    this.setState({
      openMenu: open,
    });
  }

  private toggleMenu = (event: any) => {
    event.preventDefault();

    this.setState({
      openMenu: !this.state.openMenu,
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

const container = css({
  height: "100%",
});

const menuButton = css({
  width: 80,
  paddingLeft: 20,
});