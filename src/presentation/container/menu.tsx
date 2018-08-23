import {MenuState} from "../store/menu_state";
import {createMenuDispatcher, IMenuDispatcher} from "../dispatcher/menu_dispatcher";
import {AuthStateType} from "../store/app_state";
import * as React from "react";
import {RootState} from "../store/root_state";
import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {createMenuActionCreator} from "../action/menu_action";
import {css} from "glamor";
import {Address} from "../../domain/model/address";
import {Currency} from "../../domain/model/currency";
import {User} from "../../domain/model/user";
import {Link} from 'react-router';

interface IProps {
  authState: AuthStateType;
  user: User | null;
  state: MenuState;
  dispatcher: IMenuDispatcher;
}

interface IState {
  form: {
    currencyCode: string;
    addressText: string;
  };
}

class Menu extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);

    this.state = {
      form: {
        currencyCode: "",
        addressText: "",
      },
    };

    this.props.dispatcher.getAllCurrency();
  }

  public render(): JSX.Element {
    const authState = this.props.authState;
    const {asset, addresses} = this.props.state;

    if (authState === AuthStateType.LOGIN_USER && !asset) {
      this.props.dispatcher.getAsset();
    }

    if (authState === AuthStateType.LOGIN_USER && !addresses) {
      this.props.dispatcher.getAddress();
    }

    return (
      <div {...menu}>
        {this.createUserSection()}
        {this.createAssetSection()}
        {this.createAddressSection()}
      </div>
    );
  }

  private createUserSection(): JSX.Element | null {
    const authState = this.props.authState;
    const {user} = this.props;

    if (authState === AuthStateType.LOGIN_USER && user) {
      return (
        <div className="row" style={{padding: 10, margin: 0}}>
          <div className="col s12 m12">
            <div className="card blue-grey darken-1" style={{padding: 0, margin: 0}}>
              <div className="card-content row valign-wrapper" style={{marginBottom: 0, padding: 10}}>
                <div className="col s3">
                  <img src={user.iconURL} alt="" className="circle responsive-img"/>
                </div>
                <div className="col s9">
                  <span className="white-text">{user.username}</span>
                </div>
              </div>
              <div className="card-action white-text">
                <Link to='/' {...link}>Top</Link>
                <Link to='/follows' {...link}>Follows</Link>
                <Link to='/followers' {...link}>Followers</Link>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  private createAssetSection(): JSX.Element | null {
    const authState = this.props.authState;
    const {asset} = this.props.state;

    if (authState === AuthStateType.LOGIN_USER && asset) {
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
    const {addresses, currencies} = this.props.state;

    if (authState === AuthStateType.LOGIN_USER && addresses) {
      return (
        <div className="row" style={{padding: 10, margin: 0}}>
          <div className="col s12 m12">
            <div className="card blue-grey darken-1" style={{margin: 0}}>
              <div className="card-content white-text">
                <span className="card-title">Address</span>
                {this.createAddressList(addresses)}
              </div>
              <div className="card-action">
                <form onSubmit={this.createAddress.bind(this)} {...form}>
                  <div className="input-field">
                    <select
                      name="currencyCode"
                      style={{display: "block"}}
                      value={this.state.form.currencyCode}
                      onChange={this.handleChange.bind(this)}>
                      <option disabled selected value="">Choose Currency</option>
                      {this.createCurrencySelectList(currencies)}
                    </select>
                  </div>
                  <div className="input-field">
                    <input
                      id="address"
                      type="text"
                      className="validate"
                      name="addressText"
                      value={this.state.form.addressText}
                      onChange={this.handleChange.bind(this)}/>
                    <label htmlFor="address">New Address</label>
                  </div>
                  <div className="input-field">
                    <button className="btn waves-effect waves-light col s12" type="submit" name="action">
                      登録
                    </button>
                  </div>
                </form>
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
        <div key={i} {...addressList}>
          <p>{item.code} [<a href="#" onClick={this.deleteAddress.bind(this, item)} {...deleteAddressButton}>削除</a>]</p>
          <p>{item.text}</p>
        </div>
      );
    });
  }

  private createCurrencySelectList(items: Currency[]): JSX.Element[] {
    return items.map((item, i) => {
      return (
        <option key={i} value={item.code}>{item.name}</option>
      );
    });
  }

  private createAddress(event: any): boolean {
    event.preventDefault();
    const currencyCode = this.state.form.currencyCode;
    const addressText = this.state.form.addressText;
    this.props.dispatcher.createAddress(new Address("", currencyCode, addressText));

    this.setState({
      form: {
        currencyCode: "",
        addressText: "",
      },
    });

    return false;
  }

  private deleteAddress(address: Address): void {
    this.props.dispatcher.deleteAddress(address);
  }

  private handleChange(event: any): void {
    const data = this.state.form;

    switch (event.target.name) {
      case 'currencyCode':
        data.currencyCode = event.target.value;
        break;
      case 'addressText':
        data.addressText = event.target.value;
        break;
    }

    this.setState({
      form: data,
    });
  }
}

const mapStateToProps = (state: RootState): Partial<IProps> => {
  return {
    authState: state.appReducer.authState,
    user: state.appReducer.user,
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

const deleteAddressButton = css({
  color: "#ee6e73",
});

const form = css({
  height: 200,
});

const link = css({
  color: "#ffab40",
});
