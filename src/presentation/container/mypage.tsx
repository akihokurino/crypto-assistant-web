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
import {MyPageState} from "../store/mypage_state";
import {createMyPageDispatcher, IMyPageDispatcher} from "../dispatcher/mypage_dispatcher";
import {createMyPageActionCreator} from "../action/mypage_action";

interface IProps {
  authState: AuthStateType;
  user: User | null;
  state: MyPageState;
  dispatcher: IMyPageDispatcher;
}

interface IState {

}

class MyPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  public componentWillMount() {
    const authState = this.props.authState;

    if (authState === AuthStateType.LOGIN_USER) {
      this.props.dispatcher.getAsset();
    }
  }

  public render(): JSX.Element {
    const authState = this.props.authState;
    const {asset} = this.props.state;

    if (authState === AuthStateType.LOGIN_USER && !asset) {
      this.props.dispatcher.getAsset();
    }

    return (
      <div className="row" style={{padding: 10}}>
        {this.createAssetSection()}
      </div>
    );
  }

  private createAssetSection = (): JSX.Element | null => {
    const authState = this.props.authState;
    const {asset} = this.props.state;

    if (authState === AuthStateType.LOGIN_USER && asset) {
      return (
        <div className="card blue-grey darken-1" style={{margin: 0}}>
          <div className="card-content white-text">
            <span className="card-title">Total Asset</span>
            <p>{asset.getJPYAssetString()}</p>
          </div>
          <div className="card-action">
            <a href="#">Show Detail</a>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state: RootState): Partial<IProps> => {
  return {
    authState: state.appReducer.authState,
    user: state.appReducer.user,
    state: state.myPageReducer,
  } as Partial<IProps>;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): Partial<IProps> => {
  return {
    dispatcher: createMyPageDispatcher(dispatch, createMyPageActionCreator()),
  } as Partial<IProps>;
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);