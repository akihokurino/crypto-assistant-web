import * as React from "react";
import {User} from "../../domain/model/user";

interface IProps {
  user: User;
  onClick: (user: User) => void;
}

const UserView: React.StatelessComponent<IProps> = (props) => {
  const {user} = props;
  return (
    <div className="card blue-grey darken-1" onClick={props.onClick.bind(this, user)}>
      <div className="card-content row valign-wrapper">
        <div className="col s2">
          <img src={user.iconURL} alt="" className="circle responsive-img"/>
        </div>
        <div className="col s10">
          <span className="white-text">{user.username}</span>
        </div>
      </div>
    </div>
  );
};

export default UserView;