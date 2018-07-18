import {MenuState} from "../store/menu_state";
import {createMenuDispatcher, IMenuDispatcher} from "../dispatcher/menu_dispatcher";
import {AuthState} from "../store/app_state";
import * as React from "react";
import {RootState} from "../store/root_state";
import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {createMenuActionCreator} from "../action/menu_action";
import {css} from "glamor";
import {Address} from "../../domain/model/address";

interface IProps {
  authState: AuthState;
  state: MenuState;
  dispatcher: IMenuDispatcher;
}

interface IState {

}

class Menu extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);

    this.createAssetSection = this.createAssetSection.bind(this);
    this.createAddressSection = this.createAddressSection.bind(this);
    this.createAddressList = this.createAddressList.bind(this);
  }

  public render(): JSX.Element {
    const authState = this.props.authState;
    const { asset } = this.props.state;

    if (authState === AuthState.LOGIN_USER && !asset) {
      this.props.dispatcher.getAsset();
      this.props.dispatcher.getAddress();
    }

    return (
      <div {...menu}>
        {this.createAssetSection()}
        {this.createAddressSection()}
      </div>
    );
  }

  private createAssetSection(): JSX.Element | null {
    const authState = this.props.authState;
    const { asset } = this.props.state;

    if (authState === AuthState.LOGIN_USER && asset) {
      return (
        <div className="row" style={{padding: 10, margin: 0}}>
          <div className="col s12 m12">
            <div className="card blue-grey darken-1" style={{margin: 0}}>
              <div className="card-content white-text">
                <span className="card-title">Total Asset</span>
                <p>{asset.getJPYAssetString()}</p>
              </div>
              <div className="card-action">
                <a href="#">Show Detail</a>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
  
  private createAddressSection(): JSX.Element | null {
    const authState = this.props.authState;
    const { addresses } = this.props.state;

    if (authState === AuthState.LOGIN_USER && addresses) {
      return (
        <div className="row" style={{padding: 10, margin: 0}}>
          <div className="col s12 m12">
            <div className="card blue-grey darken-1" style={{margin: 0}}>
              <div className="card-content white-text">
                <span className="card-title">Address</span>
                {this.createAddressList(addresses)}
              </div>
              <div className="card-action">
                <div className="input-field">
                  <select style={{display: "block"}}>
                    <option value="" disabled selected>Choose Currency</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                </div>
                <div className="input-field">
                  <input id="address" type="text" className="validate"/>
                  <label htmlFor="address">New Address</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  private createAddressList(items: Address[]): JSX.Element[] {
    return items.map((item, i) => {
      return (
        <div {...addressList}>
          <p>{item.code}</p>
          <p>{item.text}</p>
        </div>
      );
    });
  }
}

const mapStateToProps = (state: RootState): Partial<IProps> => {
  return {
    authState: state.appReducer.authState,
    state: state.menuReducer,
  } as Partial<IProps>;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): Partial<IProps> => {
  return {
    dispatcher: createMenuDispatcher(dispatch, createMenuActionCreator()),
  } as Partial<IProps>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

const menu = css({
  width: "100%",
});

const addressList = css({
  fontSize: 10,
});
