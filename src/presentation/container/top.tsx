import * as React from "react";
import {ITopDispatcher, TopDispatcher} from "../dispatcher/top_dispatcher";
import {TopState} from "../store/top_state";
import {AppState} from "../store/app_state";
import {Action, Dispatch} from "redux";
import {connect} from "react-redux";

interface IProps {
  state: TopState;
  dispatcher: ITopDispatcher;
}

interface IState {

}

class Top extends React.Component<IProps, IState> {
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
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): Partial<IProps> => {
  return {
    state: state.topReducer,
  } as Partial<IProps>;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): Partial<IProps> => {
  return {
    dispatcher: new TopDispatcher(dispatch),
  } as Partial<IProps>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Top);
