import * as React from "react";
import {User} from "../../domain/model/user";
import {RootState} from "../store/root_state";
import {Action, Dispatch} from "redux";
import {connect} from "react-redux";
import UserView from "../component/user_view";
import {AuthStateType} from "../store/app_state";
import {UsersState} from "../store/users_state";
import {createUsersDispatcher, IUsersDispatcher} from "../dispatcher/users_dispatcher";
import {createUsersActionCreator} from "../action/users_action";

interface IProps {
  authState: AuthStateType;
  state: UsersState;
  dispatcher: IUsersDispatcher;
}

interface IState {

}

class Users extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  public componentWillMount(): void {
    const authState = this.props.authState;

    if (authState === AuthStateType.LOGIN_USER) {
      this.props.dispatcher.getAllUsers();
    }
  }

  public render(): JSX.Element {
    const authState = this.props.authState;
    const {users} = this.props.state;

    if (authState === AuthStateType.LOGIN_USER && !users) {
      this.props.dispatcher.getAllUsers();
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
    state: state.usersReducer,
  } as Partial<IProps>;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): Partial<IProps> => {
  return {
    dispatcher: createUsersDispatcher(dispatch, createUsersActionCreator()),
  } as Partial<IProps>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);