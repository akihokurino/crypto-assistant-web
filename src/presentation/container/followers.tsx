import * as React from "react";
import {User} from "../../domain/model/user";
import {RootState} from "../store/root_state";
import {Action, Dispatch} from "redux";
import {connect} from "react-redux";
import UserView from "../component/user_view";
import {FollowersState} from "../store/follows_state";
import {createFollowersDispatcher, IFollowersDispatcher} from "../dispatcher/followers_dispatcher";
import {createFollowersActionCreator} from "../action/followers_action";
import {AuthStateType} from "../store/app_state";
import {css} from "glamor";

interface IProps {
  authState: AuthStateType;
  state: FollowersState;
  dispatcher: IFollowersDispatcher;
  router: any;
}

interface IState {

}

class Followers extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  public componentWillMount(): void {
    const authState = this.props.authState;

    if (authState === AuthStateType.LOGIN_USER) {
      this.props.dispatcher.getFollowers();
    }
  }

  public render(): JSX.Element {
    const authState = this.props.authState;
    const {users} = this.props.state;

    if (authState === AuthStateType.LOGIN_USER && !users) {
      this.props.dispatcher.getFollowers();
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

const mapStateToProps = (state: RootState): Partial<IProps> => {
  return {
    authState: state.appReducer.authState,
    state: state.followersReducer,
  } as Partial<IProps>;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): Partial<IProps> => {
  return {
    dispatcher: createFollowersDispatcher(dispatch, createFollowersActionCreator()),
  } as Partial<IProps>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Followers);

const container = css({
  height: window.innerHeight - 56,
});

const scrollContent = css({
  height: "100%",
  overflow: "scroll",
  "-webkit-overflow-scrolling": "touch",
});