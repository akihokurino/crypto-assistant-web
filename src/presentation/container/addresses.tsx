import * as React from "react";
import {RootState} from "../store/root_state";
import {Action, Dispatch} from "redux";
import {connect} from "react-redux";
import {AuthStateType} from "../store/app_state";
import {Address} from "../../domain/model/address";
import {AddressesState} from "../store/address_state";
import {createAddressesDispatcher, IAddressesDispatcher} from "../dispatcher/address_dispatcher";
import {createAddressesActionCreator} from "../action/address_action";
import AddressView from "../component/address_view";

interface IProps {
  authState: AuthStateType;
  state: AddressesState;
  dispatcher: IAddressesDispatcher;
}

interface IState {

}

class Addresses extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  public componentWillMount(): void {
    const authState = this.props.authState;

    if (authState === AuthStateType.LOGIN_USER) {
      this.props.dispatcher.getAddresses();
    }
  }

  public render(): JSX.Element {
    const authState = this.props.authState;
    const {addresses} = this.props.state;

    if (authState === AuthStateType.LOGIN_USER && !addresses) {
      this.props.dispatcher.getAddresses();
    }

    return (
      <div className="row">
        <div className="col s12">
          {this.createAddressList(addresses)}
        </div>
      </div>
    );
  }

  private createAddressList = (items: Address[] | null): JSX.Element[] | null => {
    if (!items) {
      return null;
    }

    return items.map((item, i) => {
      return (
        <AddressView key={i} address={item} onDelete={this.deleteAddress}/>
      );
    });
  }

  private deleteAddress = (address: Address): void => {
    this.props.dispatcher.deleteAddress(address);
  }
}

const mapStateToProps = (state: RootState): Partial<IProps> => {
  return {
    authState: state.appReducer.authState,
    state: state.addressesReducer,
  } as Partial<IProps>;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): Partial<IProps> => {
  return {
    dispatcher: createAddressesDispatcher(dispatch, createAddressesActionCreator()),
  } as Partial<IProps>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Addresses);
