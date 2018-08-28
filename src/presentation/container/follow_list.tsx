import * as React from "react";
import {FollowListState} from "../store/follow_list_state";
import {createFollowListDispatcher, IFollowListDispatcher} from "../dispatcher/follow_list_dispatcher";
import {User} from "../../domain/model/user";
import {AppState} from "../store/app_state";
import {Action, Dispatch} from "redux";
import {createFollowListActionCreator} from "../action/follow_list_action";
import {connect} from "react-redux";
import UserView from "../component/user_view";
import {css} from "glamor";
import {AuthStateType} from "../auth_state_type";

interface IProps {
  authState: AuthStateType;
  state: FollowListState;
  dispatcher: IFollowListDispatcher;
  router: any;
}

interface IState {
  isInit: boolean;
}

class FollowList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isInit: false,
    };
  }

  public componentWillMount(): void {
    const authState = this.props.authState;

    if (authState === AuthStateType.LOGIN_USER) {
      this.props.dispatcher.getFollows();
    }
  }

  public render(): JSX.Element {
    const authState = this.props.authState;
    const {users} = this.props.state;

    if (authState === AuthStateType.LOGIN_USER && !this.state.isInit) {
      this.props.dispatcher.getFollows();
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
          {this.createUserList(users)}
        </div>
      </div>
    );
  }

  private createUserList = (items: User[] | null): JSX.Element[] | null => {
    if (items) {
      return items.map((item, i) => {
        return <UserView key={i} user={item} onClick={() => null}/>;
      });
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state: AppState): Partial<IProps> => {
  return {
    authState: state.layoutReducer.authState,
    state: state.followListReducer,
  } as Partial<IProps>;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): Partial<IProps> => {
  return {
    dispatcher: createFollowListDispatcher(dispatch, createFollowListActionCreator()),
  } as Partial<IProps>;
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowList);

const container = css({
  height: window.innerHeight - 56,
});

const scrollContent = css({
  height: "100%",
  overflow: "scroll",
  "-webkit-overflow-scrolling": "touch",
});