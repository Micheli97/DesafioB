import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../login/Login";
import PokemonList from "../pokemon-list/pokemon-list"
import Search from "../search/search"

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Search}></Route>
        <Route path="/search"  component={Search}></Route>
        <Route path="/pokemon-list"  component={PokemonList}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
