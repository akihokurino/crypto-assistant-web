import * as React from "react";
import {AppState} from "../store/app_state";
import {Action, Dispatch} from "redux";
import {connect} from "react-redux";
import {Address} from "../../domain/model/address";
import {AddressListState} from "../store/address_list_state";
import {createAddressListDispatcher, IAddressListDispatcher} from "../dispatcher/address_list_dispatcher";
import {createAddressListActionCreator} from "../action/address_action";
import AddressView from "../component/address_view";
import {css} from "glamor";
import {AuthStateType} from "../auth_state_type";

interface IProps {
  authState: AuthStateType;
  state: AddressListState;
  dispatcher: IAddressListDispatcher;
  router: any;
}

interface IState {
  isInit: boolean;
}

class AddressList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isInit: false,
    };
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

    if (authState === AuthStateType.LOGIN_USER && !this.state.isInit) {
      this.props.dispatcher.getAddresses();
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

const mapStateToProps = (state: AppState): Partial<IProps> => {
  return {
    authState: state.layoutReducer.authState,
    state: state.addressListReducer,
  } as Partial<IProps>;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): Partial<IProps> => {
  return {
    dispatcher: createAddressListDispatcher(dispatch, createAddressListActionCreator()),
  } as Partial<IProps>;
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressList);

const container = css({
  height: window.innerHeight - 56,
});

const scrollContent = css({
  height: "100%",
  overflow: "scroll",
  "-webkit-overflow-scrolling": "touch",
});
