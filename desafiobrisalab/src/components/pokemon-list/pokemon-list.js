import React, { useState, useEffect } from "react";
import Card from "../cards/card";
import NavBar from "../navbar/navbar";
import { getPokemons } from "../home/services/pokemon";
import "./pokemon-list.css";

class PokemonList extends React.Component {
  async componentDidMount() {
    this.pokemons = await getPokemons();
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>

        <div className="list-buttons">
          <button className="button">Todos</button>
          <button className="button">Fire</button>
          <button className="button">Eletric</button>
          <button className="button">Water</button>
        </div>
        
        {/* <div>
          {this.pokemons.results.map((pokemon) => {
            return <Card name={pokemon.name}></Card>;
          })}
        </div> */}
      </div>
    );
  }
}

export default PokemonList;
