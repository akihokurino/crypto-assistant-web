import * as React from "react";
import { css } from 'glamor';
import {theme} from "../color";
import {Address} from "../../domain/model/address";

interface IProps {
  address: Address;
  onDelete: (address: Address) => void;
}

const AddressView: React.StatelessComponent<IProps> = (props) => {
  const {address} = props;
  return (
    <div className="card horizontal" {...css(card, theme)}>
      <div className="card-stacked">
        <div {...content}>
          <p {...code}>{address.code}</p>
          <p {...text}>{address.text}</p>
        </div>
        <div {...deleteButton}>
          <a onClick={props.onDelete.bind(this, address)} className="waves-effect waves-light btn">Delete</a>
        </div>
      </div>
    </div>
  );
};

export default AddressView;

const card = css({
  height: 140,
  color: "#FFFFFF",
});

const content = css({
  padding: 16,
  height: 90,
});

const code = css({
  marginTop: 0,
});

const text = css({
  marginTop: 5,
  color: "hsla(0,0%,100%,.5)",
  fontSize: 12,
});

const deleteButton = css({
  marginLeft: 15,
  marginRight: 15,
});
