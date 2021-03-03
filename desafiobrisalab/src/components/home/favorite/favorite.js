import React from "react";
import NavBar from "../navbar/navbar";
import "./favorite.css";

function Favorite() {
  return (
    <div className="body">
      <NavBar></NavBar>
      <div className="astronaut"></div>
      <h3>Está meio vazio por aqui!</h3>
      <h5>Procure por pokémons para adicioná-los aos seus favoritos</h5>
      <button className="searchPokemonsButton">Procurar pokémons</button>
    </div>
  );
}

export default Favorite;
