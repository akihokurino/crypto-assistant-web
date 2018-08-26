import * as React from "react";
import {FollowsState} from "../store/followers_state";
import {createFollowsDispatcher, IFollowsDispatcher} from "../dispatcher/follows_dispatcher";
import {User} from "../../domain/model/user";
import {RootState} from "../store/root_state";
import {Action, Dispatch} from "redux";
import {createFollowsActionCreator} from "../action/follows_action";
import {connect} from "react-redux";
import UserView from "../component/user_view";
import {AuthStateType} from "../store/app_state";
import {user} from "../../infra/api/rpc/api";

interface IProps {
  authState: AuthStateType;
  state: FollowsState;
  dispatcher: IFollowsDispatcher;
}

interface IState {

}

class Follows extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
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

    if (authState === AuthStateType.LOGIN_USER && !users) {
      this.props.dispatcher.getFollows();
    }

    return (
      <div className="row">
        <div className="col s12">
          {this.createUserList(users)}
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