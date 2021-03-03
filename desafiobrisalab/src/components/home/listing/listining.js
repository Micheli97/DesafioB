import React from "react";
import NavBar from "../navbar/navbar";
import "./listining.css";

function Listining() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="listButtons">
        <button className="allButton">Todos</button>
        <button className="fireButton">Fire</button>
        <button className="eletricButton">Eletric</button>
        <button className="waterButton">Water</button>
      </div>
    </div>
  );
}

export default Listining;
