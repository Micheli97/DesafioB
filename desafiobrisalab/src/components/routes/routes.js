import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../login/Login";
import PokemonList from "../home/pokemon-list/pokemon-list"
import Search from "../home/search/search"

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/search"  component={Search}></Route>
        <Route path="/pokemon-list"  component={PokemonList}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
