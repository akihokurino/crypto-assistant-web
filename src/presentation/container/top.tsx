import * as React from "react";
import {TopState} from "../store/top_state";
import {AppState} from "../store/app_state";
import {Action, Dispatch} from "redux";
import {connect} from "react-redux";
import {createDispatcher, ITopDispatcher} from "../dispatcher/top_dispatcher";
import {createActionCreator} from "../action/top_action";
import {Currency} from "../../domain/model/currency";
import CurrencyView from "../component/currency_view";

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
    this.props.dispatcher.getAllCurrency();
  }

  public render(): JSX.Element {
    const { currencies } = this.props.state;
    return (
      <div className="">
        {this.createCurrencyList(currencies)}
      </div>
    );
  }

  private createCurrencyList = (items: Currency[]): JSX.Element[] => {
    return items.map((item, i) => {
      return <CurrencyView key={i} currency={item} />;
    });
  }
}

const mapStateToProps = (state: AppState): Partial<IProps> => {
  return {
    state: state.topReducer,
  } as Partial<IProps>;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): Partial<IProps> => {
  return {
    dispatcher: createDispatcher(dispatch, createActionCreator()),
  } as Partial<IProps>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Top);
