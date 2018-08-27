import * as React from "react";
import {User} from "../../domain/model/user";
import {RootState} from "../store/root_state";
import {Action, Dispatch} from "redux";
import {connect} from "react-redux";
import UserView from "../component/user_view";
import {AuthStateType} from "../store/app_state";
import {UserState} from "../store/user_state";
import {createUserDispatcher, IUserDispatcher} from "../dispatcher/user_dispatcher";
import {Portfolio} from "../../domain/model/portfolio";
import PortfolioView from "../component/portfolio_view";
import {createUserActionCreator} from "../action/user_action";
import {css} from "glamor";

interface IProps {
  authState: AuthStateType;
  state: UserState;
  dispatcher: IUserDispatcher;
  params: any;
  router: any;
}

interface IState {
  isInit: boolean;
}

class UserPage extends React.Component<IProps, IState> {
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

const mapStateToProps = (state: RootState): Partial<IProps> => {
  return {
    authState: state.appReducer.authState,
    state: state.userReducer,
  } as Partial<IProps>;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): Partial<IProps> => {
  return {
    dispatcher: createUserDispatcher(dispatch, createUserActionCreator()),
  } as Partial<IProps>;
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

const container = css({
  height: window.innerHeight - 56,
});

const scrollContent = css({
  height: "100%",
  overflow: "scroll",
  "-webkit-overflow-scrolling": "touch",
});