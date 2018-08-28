import * as React from "react";
import {User} from "../../domain/model/user";
import {AppState} from "../store/app_state";
import {Action, Dispatch} from "redux";
import {connect} from "react-redux";
import {MyPageState} from "../store/mypage_state";
import {createMyPageDispatcher, IMyPageDispatcher} from "../dispatcher/mypage_dispatcher";
import {createMyPageActionCreator} from "../action/mypage_action";
import {css} from "glamor";
import {AuthStateType} from "../auth_state_type";

interface IProps {
  authState: AuthStateType;
  user: User | null;
  state: MyPageState;
  dispatcher: IMyPageDispatcher;
  router: any;
}

interface IState {
  isInit: boolean;
}

class MyPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isInit: false,
    };
  }

  public componentWillMount() {
    const authState = this.props.authState;

    if (authState === AuthStateType.LOGIN_USER) {
      this.props.dispatcher.getAsset();
    }
  }

  public render(): JSX.Element {
    const authState = this.props.authState;

    if (authState === AuthStateType.LOGIN_USER && !this.state.isInit) {
      this.props.dispatcher.getAsset();
      this.setState({
        isInit: true,
      });
    }

    if (authState !== AuthStateType.LOGIN_USER) {
      this.props.router.push("/");
    }

    return (
      <div className="row" style={{padding: 10}} {...container}>
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

const mapStateToProps = (state: AppState): Partial<IProps> => {
  return {
    authState: state.layoutReducer.authState,
    user: state.layoutReducer.user,
    state: state.myPageReducer,
  } as Partial<IProps>;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): Partial<IProps> => {
  return {
    dispatcher: createMyPageDispatcher(dispatch, createMyPageActionCreator()),
  } as Partial<IProps>;
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);

const container = css({
  height: window.innerHeight - 56,
});