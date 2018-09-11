import React from "react";
import "./game.css";



const Game = props => (

  
  <div className="container">
    <div className="row r1">
      <div className= "col-sm picture c1">
      <button
        type="submit"
        onClick={this.handleFormSubmit}
        className="btn btn-success"
      >
        Test
      </button>
      </div>

      <div className= "col-sm picture c2"></div>

      <div className= "col-sm picture c3"></div>

      <div className= "col-sm picture c4"></div>      

    </div>  

    <div className="row r2">
      <div className= "col-sm picture c1"></div>

      <div className= "col-sm picture c2"></div>

      <div className= "col-sm picture c3"></div>

      <div className= "col-sm picture c4"></div>      

    </div>

    <div className="row r3">
      <div className= "col-sm picture c1"></div>

      <div className= "col-sm picture c2"></div>

      <div className= "col-sm picture c3"></div>

      <div className= "col-sm picture c4"></div>      

    </div>
    </div>
 
);

export default Game;