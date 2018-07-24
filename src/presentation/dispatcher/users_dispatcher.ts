import {Action} from "redux";
import {IUsersActionCreator} from "../action/users_action";

interface IUsersDispatcher {
  getAllUsers(): void;
}

class Dispatcher implements IUsersDispatcher {

  constructor(private dispatch: (action: Action) => void,
              private actionCreator: IUsersActionCreator) {

  }

  public getAllUsers(): void {
    this.dispatch(this.actionCreator.requestGetAllUsersAction());
  }
}

const createUsersDispatcher = (dispatch: (action: Action) => void, actionCreator: IUsersActionCreator): IUsersDispatcher => {
  return new Dispatcher(dispatch, actionCreator);
};

export { IUsersDispatcher, createUsersDispatcher };