import * as React from "react";
import './App.css';

interface IProps {

}

interface IState {

}

class App extends React.Component<IProps, IState> {
  public render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
