import React from "react";
import Routes from "./components/routes/routes"
import Login from "./components/login/Login";
import Pokemonlist from "./components/home/pokemon-list/pokemon-list"
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";


function App() {
  return (

    <Routes />
    // <BrowserRouter>
    //   <switch>
    //     <Route exact path="/" >
    //       <Pokemonlist />
    //     </Route>
    //     <Route exact path="/pokemon-list" >
    //       <Pokemonlist />
    //     </Route>
        
    //   </switch>
    // </BrowserRouter>
  );
}

export default App;
