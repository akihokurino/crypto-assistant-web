import 'rmc-tabs/assets/index.css';

import * as React from "react";
import {TopState} from "../store/top_state";
import {AppState} from "../store/app_state";
import {Action, Dispatch} from "redux";
import {connect} from "react-redux";
import {createTopDispatcher, ITopDispatcher} from "../dispatcher/top_dispatcher";
import {createTopActionCreator} from "../action/top_action";
import {Currency} from "../../domain/model/currency";
import CurrencyView from "../component/currency_view";
import {Portfolio} from "../../domain/model/portfolio";
import PortfolioView from "../component/portfolio_view";
import {Models, Tabs, DefaultTabBar, TabBarPropsType} from "rmc-tabs";
import TabData = Models.TabData;
import {ReactNode} from "react";
import {css} from "glamor";
import {AuthStateType} from "../auth_state_type";

interface IProps {
  authState: AuthStateType;
  state: TopState;
  dispatcher: ITopDispatcher;
}

interface IState {
  page: number;
  isInit: boolean;
}

const tabs: TabData[] = [
  { key: 't1', title: 'currency' },
  { key: 't2', title: 'portfolio' },
];

class Top extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      page: 0,
      isInit: false,
    };
  }

  public componentWillMount(): void {
    const authState = this.props.authState;

    this.props.dispatcher.getAllCurrency();
    if (authState === AuthStateType.LOGIN_USER) {
      this.props.dispatcher.getPortfolio();
    }
  }

  public render(): JSX.Element {
    const authState = this.props.authState;
    const { currencies, portfolios } = this.props.state;

    if (authState === AuthStateType.LOGIN_USER && this.state.isInit) {
      this.props.dispatcher.getPortfolio();
      this.setState({
        isInit: true,
      });
    }

    return (
      <div {...container}>
        <div style={{display: 'flex', flexDirection: 'column', height: "100%"}}>
          <Tabs tabs={tabs}
                page={this.state.page}
                onChange={this.onChangeTab}
                renderTabBar={this.renderTabBar}>
            <div key="t1" className="row" {...content}>
              <div className="col s12" style={{paddingTop: 0}} {...scrollContent}>
                {this.createCurrencyList(currencies)}
              </div>
            </div>,
            <div key="t2" className="row" {...content}>
              <div className="col s12" style={{paddingTop: 0}} {...scrollContent}>
                {this.createPortfolioList(portfolios, authState)}
              </div>
            </div>,
          </Tabs>
        </div>
      </div>
    );
  }

  private renderTabBar = (props: TabBarPropsType): ReactNode => {
    return <DefaultTabBar
          {...props}
          renderTab={(tab: Models.TabData) => {
            return <div {...tabContainer}><span {...tabContent}>{tab.title}</span></div>;
          }}
    />;
  }

  private onChangeTab = (tab: any, index: number): void => {
    this.setState({
      page: index,
    });
  }

  private createCurrencyList = (items: Currency[]): JSX.Element[] => {
    return items.map((item, i) => {
      return <CurrencyView key={i} currency={item} />;
    });
  }

  private createPortfolioList = (items: Portfolio[] | null, authState: AuthStateType): JSX.Element[] | JSX.Element | null => {
    switch (authState) {
      case AuthStateType.LOGIN_USER:
        if (items) {
          return items.map((item, i) => {
            return <PortfolioView key={i} portfolio={item} />;
          });
        } else {
          return null;
        }
      case AuthStateType.GUEST:
        return (
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Crypto</span>
              <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">SignUp</a>
              <a href="#">Login</a>
            </div>
          </div>
        );
      case AuthStateType.UNKNOWN:
        return null;
    }
  }
}

const mapStateToProps = (state: AppState): Partial<IProps> => {
  return {
    authState: state.layoutReducer.authState,
    state: state.topReducer,
  } as Partial<IProps>;
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): Partial<IProps> => {
  return {
    dispatcher: createTopDispatcher(dispatch, createTopActionCreator()),
  } as Partial<IProps>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Top);

const container = css({
  height: window.innerHeight - 56,
});

const tabContainer = css({
  height: 30,
});

const tabContent = css({
  display: 'block',
  height: 30,
  lineHeight: 2,
  fontSize: 20,
});

const content = css({
  height: "100%",
});

const scrollContent = css({
  height: "100%",
  overflow: "scroll",
  "-webkit-overflow-scrolling": "touch",
});
