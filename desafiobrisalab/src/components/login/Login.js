import React from "react";
import logo from "./image1.png";
import imageSide from "./light1.png";
import LoginButton from "./LoginButton";
import Forms from "./Foms";

function LoginScreen() {
  return (
      
    <div className="background">
      <div className="logo">
        <img src={logo}></img>
      </div>

      <div>
        <h1 className="title">Comece a coletar pokemons!</h1>
      </div>

      {/* <div>
          <img src={imageSide}></img>
      </div> */}


      <div>
        <Forms></Forms>
      </div>

      <div>
        <LoginButton></LoginButton>
      </div>
    </div>
  );
}

export default LoginScreen;
