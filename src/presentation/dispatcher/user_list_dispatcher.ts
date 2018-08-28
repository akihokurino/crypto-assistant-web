import {Action} from "redux";
import {IUserListActionCreator} from "../action/user_list_action";

interface IUserListDispatcher {
  getAllUsers(): void;
}

class Dispatcher implements IUserListDispatcher {

  constructor(private dispatch: (action: Action) => void,
              private actionCreator: IUserListActionCreator) {

  }

  public getAllUsers = (): void => {
    this.dispatch(this.actionCreator.requestGetAllUsersAction());
  }
}

const createUserListDispatcher = (dispatch: (action: Action) => void, actionCreator: IUserListActionCreator): IUserListDispatcher => {
  return new Dispatcher(dispatch, actionCreator);
};

export { IUserListDispatcher, createUserListDispatcher };