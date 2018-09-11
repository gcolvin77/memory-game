import React from "react";

const Main = () => (
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Memory Game
      </a>
    <span className="h4 ml-auto" style={{ color: 'white'}} id="score">Score</span>
    </nav>
    <div className="jumbotron" style={{ textAlign: 'center'}} >
      <h3>Select pictures one at a time, but don't click the same
      picture twice or else you lose! Can you click them all?</h3>
    </div>
  
  </div>
);

export default Main;