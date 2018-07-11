import * as React from "react";
import {AppState} from "../store/app_state";
import {Action, Dispatch} from "redux";
import {connect} from "react-redux";

interface IProps {

}

interface IState {

}

class Layout extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  public componentWillMount(): void {
    // 初期化処理
  }

  public componentWillUnmount(): void {
    // 終了時処理
  }

  public render(): JSX.Element {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="#">新規登録</a></li>
              <li><a href="#">ログイン</a></li>
            </ul>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): Partial<IProps> => {
  return {

  } as Partial<IProps>;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): Partial<IProps> => {
  return {

  } as Partial<IProps>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
