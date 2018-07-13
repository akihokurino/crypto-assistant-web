import * as React from "react";
import {Action, Dispatch} from "redux";
import {connect} from "react-redux";
import {AppState} from "../store/app_state";
import { css } from 'glamor';
import {theme} from "../color";

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
      <div {...container}>
        <nav {...theme}>
          <div className="nav-wrapper ">
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="#">SignUp</a></li>
              <li><a href="#">SignIn</a></li>
            </ul>
          </div>
        </nav>
        <div className="row" {...main}>
          <div className="col s3" {...menu} style={{padding: 0}}>

          </div>
          <div className="col s6" {...content} style={{paddingTop: 0}}>
            {this.props.children}
          </div>
          <div className="col s3"></div>
        </div>
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

const container = css({

});

const main = css({
  marginBottom: 0,
});

const menu = css({
  width: 250,
  marginLeft: 10,
  height: 1500,
  backgroundColor: "#121b25",
});

const content = css({
  marginTop: 4,
});
