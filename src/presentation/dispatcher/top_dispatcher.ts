import {Action} from "redux";

interface ITopDispatcher {

}

class TopDispatcher implements ITopDispatcher {

  constructor(private dispatch: (action: Action) => void) {

  }
}

export { ITopDispatcher, TopDispatcher };