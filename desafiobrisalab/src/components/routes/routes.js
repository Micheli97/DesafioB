import React from "react";
import Login from "../login/Login";
import PokemonList from "../home/pokemon-list/pokemon-list"
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/pokemon-list" exact component={PokemonList}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
