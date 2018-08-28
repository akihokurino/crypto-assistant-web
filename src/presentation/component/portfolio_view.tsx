import * as React from "react";
import {css} from 'glamor';
import {theme} from "../color";
import {Portfolio} from "../../domain/model/portfolio";

interface IProps {
  portfolio: Portfolio;
}

const PortfolioView: React.StatelessComponent<IProps> = (props) => {
  const { portfolio } = props;
  return (
    <div className="card horizontal" {...css(card, theme)}>
      <div className="card-stacked">
        <div {...content}>
          <p {...name}>{portfolio.currencyCode}</p>
          <p {...price}>{portfolio.currencyCode} = {portfolio.amount}  JPY = {portfolio.jpyAsset}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioView;

const card = css({
  height: 90,
  color: "#FFFFFF",
});

const content = css({
  padding: 16,
  height: 90,
});

const name = css({
  marginTop: 0,
});

const price = css({
  marginTop: 5,
  color: "hsla(0,0%,100%,.5)",
  fontSize: 12,
});
