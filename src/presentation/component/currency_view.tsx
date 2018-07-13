import * as React from "react";
import {Currency} from "../../domain/model/currency";
import { css } from 'glamor';
import {theme} from "../color";

interface IProps {
  currency: Currency;
}

const CurrencyView: React.StatelessComponent<IProps> = (props) => {
  const {currency} = props;
  return (
    <div className="card horizontal" {...css(card, theme)}>
      <div className="card-stacked">
        <div {...content}>
          <p {...name}>{currency.name}</p>
          <p {...price}>{currency.code} = {currency.getJPYPriceString()}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyView;

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
