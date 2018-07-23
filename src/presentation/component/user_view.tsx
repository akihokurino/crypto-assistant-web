import * as React from "react";
import {User} from "../../domain/model/user";

interface IProps {
  user: User;
}

const UserView: React.StatelessComponent<IProps> = (props) => {
  const {user} = props;
  return (
    <div className="card blue-grey darken-1" style={{padding: 0, margin: 0}}>
      <div className="card-content row valign-wrapper" style={{marginBottom: 0, padding: 10}}>
        <div className="col s3">
          <img src={user.iconURL} alt="" className="circle responsive-img"/>
        </div>
        <div className="col s9">
          <span className="white-text">{user.username}</span>
        </div>
      </div>
    </div>
  );
};

export default UserView;