import * as React from "react";
import {TopState} from "../store/top_state";
import {RootState} from "../store/root_state";
import {Action, Dispatch} from "redux";
import {connect} from "react-redux";
import {createTopDispatcher, ITopDispatcher} from "../dispatcher/top_dispatcher";
import {createTopActionCreator} from "../action/top_action";
import {Currency} from "../../domain/model/currency";
import CurrencyView from "../component/currency_view";
import {Portfolio} from "../../domain/model/portfolio";
import PortfolioView from "../component/portfolio_view";
import {AuthState} from "../store/app_state";

interface IProps {
  authState: AuthState;
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
    const authState = this.props.authState;
    const { currencies, portfolios } = this.props.state;

    if (authState === AuthState.LOGIN_USER && !portfolios) {
      this.props.dispatcher.getPortfolio();
    }

    return (
      <div className="row">
        <div className="col s6">
          <blockquote>
            Currency
          </blockquote>
          {this.createCurrencyList(currencies)}
        </div>
        <div className="col s6">
          <blockquote>
            Portfolio
          </blockquote>
          {this.createPortfolioList(portfolios)}
        </div>
      </div>
    );
  }

  private createCurrencyList = (items: Currency[]): JSX.Element[] => {
    return items.map((item, i) => {
      return <CurrencyView key={i} currency={item} />;
    });
  }

  private createPortfolioList = (items: Portfolio[] | null): JSX.Element[] | null => {
    if (items) {
      return items.map((item, i) => {
        return <PortfolioView key={i} portfolio={item} />;
      });
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state: RootState): Partial<IProps> => {
  return {
    authState: state.appReducer.authState,
    state: state.topReducer,
  } as Partial<IProps>;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): Partial<IProps> => {
  return {
    dispatcher: createTopDispatcher(dispatch, createTopActionCreator()),
  } as Partial<IProps>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Top);
