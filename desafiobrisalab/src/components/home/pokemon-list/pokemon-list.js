import React, { useState, useEffect } from "react";
import Card from "../cards/card";
import NavBar from "../navbar/navbar";
import { getPokemons } from "../services/pokemon";
import "./pokemon-list.css";

class PokemonList extends React.Component {
  async componentDidMount() {
    this.pokemons = await getPokemons();
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>

        <div className="listButtons">
          <button className="allButton">Todos</button>
          <button className="fireButton">Fire</button>
          <button className="eletricButton">Eletric</button>
          <button className="waterButton">Water</button>
        </div>
        
        <div>
          {this.pokemons.results.map((pokemon) => {
            return <Card name={pokemon.name}></Card>;
          })}
        </div>
      </div>
    );
  }
}

export default PokemonList;
