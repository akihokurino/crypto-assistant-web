import * as React from "react";
import {User} from "../../domain/model/user";
import {AppState} from "../store/app_state";
import {Action, Dispatch} from "redux";
import {connect} from "react-redux";
import UserView from "../component/user_view";
import {UserDetailState} from "../store/user_detail_state";
import {createUserDetailDispatcher, IUserDetailDispatcher} from "../dispatcher/user_detail_dispatcher";
import {Portfolio} from "../../domain/model/portfolio";
import PortfolioView from "../component/portfolio_view";
import {createUserDetailActionCreator} from "../action/user_detail_action";
import {css} from "glamor";
import {AuthStateType} from "../auth_state_type";

interface IProps {
  authState: AuthStateType;
  state: UserDetailState;
  dispatcher: IUserDetailDispatcher;
  params: any;
  router: any;
}

interface IState {
  isInit: boolean;
}

class UserDetail extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isInit: false,
    };
  }

  public componentWillMount(): void {
    const authState = this.props.authState;
    const {id} = this.props.params;

    if (authState === AuthStateType.LOGIN_USER) {
      this.props.dispatcher.getUser(id);
      this.props.dispatcher.getPortfolio(id);
    }
  }

  public render(): JSX.Element {
    const authState = this.props.authState;
    const {user, portfolios} = this.props.state;
    const {id} = this.props.params;

    if (authState === AuthStateType.LOGIN_USER && !this.state.isInit) {
      this.props.dispatcher.getUser(id);
      this.props.dispatcher.getPortfolio(id);
      this.setState({
        isInit: true,
      });
    }

    if (authState !== AuthStateType.LOGIN_USER) {
      this.props.router.push("/");
    }

    return (
      <div className="row" {...container}>
        <div className="col s12" {...scrollContent}>
          {this.createUserSection(user)}
          {this.createPortfolioList(portfolios)}
        </div>
      </div>
    );
  }

  private createUserSection = (item: User | null): JSX.Element | null => {
    if (item) {
      return <UserView user={item} onClick={() => null}/>;
    } else {
      return null;
    }
  }

  private createPortfolioList = (items: Portfolio[]): JSX.Element[] => {
    return items.map((item, i) => {
      return <PortfolioView key={i} portfolio={item} />;
    });
  }
}

const mapStateToProps = (state: AppState): Partial<IProps> => {
  return {
    authState: state.layoutReducer.authState,
    state: state.userDetailReducer,
  } as Partial<IProps>;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): Partial<IProps> => {
  return {
    dispatcher: createUserDetailDispatcher(dispatch, createUserDetailActionCreator()),
  } as Partial<IProps>;
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);

const container = css({
  height: window.innerHeight - 56,
});

const scrollContent = css({
  height: "100%",
  overflow: "scroll",
  "-webkit-overflow-scrolling": "touch",
});