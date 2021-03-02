import React from "react";
import astronaut from "./Astronaut-pana1.png";
import logo from "./image4.png";
import "./Home.css";

export default (props) => {
  return (
    <div>
      <div className="appBar">
        <img src={logo} className="logo"></img>

       

      </div>
      <img src={astronaut} className="astronaut"></img>
      <h3>Está meio vazio por aqui!</h3>
      <h5>Procure por pokémons para adicioná-los aos seus favoritos</h5>

    </div>
  );
};
