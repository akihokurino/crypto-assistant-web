import * as React from "react";
import {RootState} from "../store/root_state";
import {Action, Dispatch} from "redux";
import {connect} from "react-redux";
import {AuthStateType} from "../store/app_state";
import {Address} from "../../domain/model/address";
import {RegisterAddressState} from "../store/register_address";
import {createRegisterAddressDispatcher, IRegisterAddressDispatcher} from "../dispatcher/register_address_dispatcher";
import {Currency} from "../../domain/model/currency";
import {createRegisterAddressActionCreator} from "../action/register_address_action";
import {css} from "glamor";

interface IProps {
  authState: AuthStateType;
  state: RegisterAddressState;
  dispatcher: IRegisterAddressDispatcher;
  router: any;
}

interface IState {
  form: {
    currencyCode: string;
    addressText: string;
  };
}

class RegisterAddress extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      form: {
        currencyCode: "",
        addressText: "",
      },
    };
  }

  public componentWillMount(): void {
    const authState = this.props.authState;

    if (authState === AuthStateType.LOGIN_USER) {
      this.props.dispatcher.getAllCurrency();
    }
  }

  public render(): JSX.Element {
    const authState = this.props.authState;

    if (authState !== AuthStateType.LOGIN_USER) {
      this.props.router.push("/");
    }

    return (
      <div className="row" {...container}>
        <div className="col s12">
          {this.createRegisterAddressForm()}
        </div>
      </div>
    );
  }

  private createRegisterAddressForm = (): JSX.Element | null => {
    const authState = this.props.authState;
    const {currencies} = this.props.state;

    switch (authState) {
      case AuthStateType.LOGIN_USER:
        return (
          <div className="card-action">
            <form onSubmit={this.createAddress.bind(this)}>
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
                  Registeration
                </button>
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  }

  private createCurrencySelectList = (items: Currency[]): JSX.Element[] => {
    return items.map((item, i) => {
      return (
        <option key={i} value={item.code}>{item.name}</option>
      );
    });
  }

  private createAddress = (event: any): boolean => {
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

  private handleChange = (event: any): void => {
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
    state: state.registerAddressReducer,
  } as Partial<IProps>;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): Partial<IProps> => {
  return {
    dispatcher: createRegisterAddressDispatcher(dispatch, createRegisterAddressActionCreator()),
  } as Partial<IProps>;
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterAddress);

const container = css({
  height: window.innerHeight - 56,
});
