import * as React from "react";
import {User} from "../../domain/model/user";
import {RootState} from "../store/root_state";
import {Action, Dispatch} from "redux";
import {connect} from "react-redux";
import UserView from "../component/user_view";
import {FollowersState} from "../store/follows_state";
import {createFollowersDispatcher, IFollowersDispatcher} from "../dispatcher/followers_dispatcher";
import {createFollowersActionCreator} from "../action/followers_action";
import {AuthState} from "../store/app_state";

interface IProps {
  authState: AuthState;
  state: FollowersState;
  dispatcher: IFollowersDispatcher;
}

interface IState {

}

class Followers extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const authState = this.props.authState;
    const {users} = this.props.state;

    if (authState === AuthState.LOGIN_USER && !users) {
      this.props.dispatcher.getFollowers();
    }

    return (
      <div className="row">
        <div className="col s6">
          <blockquote>
            Followers
          </blockquote>
          {this.createUserList(users)}
        </div>
        <div className="col s6">
        </div>
      </div>
    );
  }

  private createUserList = (items: User[] | null): JSX.Element[] | null => {
    if (items) {
      return items.map((item, i) => {
        return <UserView key={i} user={item}/>;
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