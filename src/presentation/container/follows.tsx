import * as React from "react";
import {FollowsState} from "../store/followers_state";
import {createFollowsDispatcher, IFollowsDispatcher} from "../dispatcher/follows_dispatcher";
import {User} from "../../domain/model/user";
import {RootState} from "../store/root_state";
import {Action, Dispatch} from "redux";
import {createFollowsActionCreator} from "../action/follows_action";
import {connect} from "react-redux";
import UserView from "../component/user_view";
import {AuthState} from "../store/app_state";

interface IProps {
  authState: AuthState;
  state: FollowsState;
  dispatcher: IFollowsDispatcher;
}

interface IState {

}

class Follows extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const authState = this.props.authState;
    const {users} = this.props.state;

    if (authState === AuthState.LOGIN_USER && !users) {
      this.props.dispatcher.getFollows();
    }

    return (
      <div className="row">
        <div className="col s6">
          <blockquote>
            Follows
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
    state: state.followsReducer,
  } as Partial<IProps>;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): Partial<IProps> => {
  return {
    dispatcher: createFollowsDispatcher(dispatch, createFollowsActionCreator()),
  } as Partial<IProps>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Follows);