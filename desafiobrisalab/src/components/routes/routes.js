import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../login/login";
import PokemonList from "../pokemon-list/pokemon-list";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/pokemon-list" component={PokemonList}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Routes;
