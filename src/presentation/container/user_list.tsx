import * as React from "react";
import {User} from "../../domain/model/user";
import {AppState} from "../store/app_state";
import {Action, Dispatch} from "redux";
import {connect} from "react-redux";
import UserView from "../component/user_view";
import {UserListState} from "../store/user_list_state";
import {createUserListDispatcher, IUserListDispatcher} from "../dispatcher/user_list_dispatcher";
import {createUserListActionCreator} from "../action/user_list_action";
import {css} from "glamor";
import {AuthStateType} from "../auth_state_type";

interface IProps {
  authState: AuthStateType;
  state: UserListState;
  dispatcher: IUserListDispatcher;
  router: any;
}

interface IState {
  isInit: boolean;
}

class UserList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isInit: false,
    };
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

    if (authState === AuthStateType.LOGIN_USER && !this.state.isInit) {
      this.props.dispatcher.getAllUsers();
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
        return <UserView key={i} user={item} onClick={this.moveToUserDetail}/>;
      });
    } else {
      return null;
    }
  }

  private moveToUserDetail = (user: User): void => {
    this.props.router.push("/users/" + user.id);
  }
}

const mapStateToProps = (state: AppState): Partial<IProps> => {
  return {
    authState: state.layoutReducer.authState,
    state: state.userListReducer,
  } as Partial<IProps>;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): Partial<IProps> => {
  return {
    dispatcher: createUserListDispatcher(dispatch, createUserListActionCreator()),
  } as Partial<IProps>;
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

const container = css({
  height: window.innerHeight - 56,
});

const scrollContent = css({
  height: "100%",
  overflow: "scroll",
  "-webkit-overflow-scrolling": "touch",
});