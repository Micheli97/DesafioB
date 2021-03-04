import React from "react";
import Card from "../cards/card";
import NavBar from "../navbar/navbar";
import { getPokemons } from "../services/pokemon";
import "./pokemon-list.css";

class PokemonList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { pokemons: [] };
  }
  async componentDidMount() {
    const pokemons = await getPokemons();
    this.setState({
      pokemons: pokemons,
    });
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="content ">
          <div className="cards-list">
            {this.state.pokemons &&
              this.state.pokemons.map((pokemon) => {
                return (
                  <Card
                    // propriedades dos cards
                    name={pokemon.name}
                    img={pokemon.sprites.front_default}
                    id={pokemon.id}
                    types={pokemon.types}
                  ></Card>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonList;
