import React, { Component } from 'react';
import './App.css';
import Main from "./components/main";
import Game from "./components/game";

class App extends Component {

  render() {
    return (
      <div>
      <Main />
      <Game />
      </div>
    );
  }
}

export default App;
