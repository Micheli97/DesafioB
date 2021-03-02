import React from "react";
import Forms from "./Foms";
import LoginButton from "./LoginButton";
import "./Login.css";

function LoginScreen() {
  return (
    <div className="background">
      {/* Falta arrumar a imagem de background */}
      
      <div className="form">
        <div className="logo"></div>
        <h2>Comece a coletar pokémons!</h2>
        <Forms></Forms>
        <LoginButton></LoginButton>
      </div>
    </div>
  );
}

export default LoginScreen;
