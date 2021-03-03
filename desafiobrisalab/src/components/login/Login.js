import React from "react";
import Forms from "./Foms";
import LoginButton from "./LoginButton";

import "./Login.css";

function LoginScreen() {
  return (
    <div className="background">
      
      <div className="form">
        <div className="logoLogin"></div>
        <h2>Comece a coletar pokémons!</h2>
        <Forms></Forms>
       
      </div>
    </div>
  );
}

export default LoginScreen;
