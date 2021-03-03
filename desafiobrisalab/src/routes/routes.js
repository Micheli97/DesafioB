import React from "react";
import Login from "../components/login/Login";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Route>
      <switch>
        <Route exact path="/" component={() => Login}></Route>
      </switch>
    </Route>
  </BrowserRouter>
);

export default Routes;
