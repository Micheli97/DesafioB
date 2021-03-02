import React from "react";
import logo from "./image1.png";
import imageSide from "./light1.png";
import LoginButton from "./LoginButton";
import ThemeBbutton from "./ThemeButton";



export default (props) => {
  return (
    <div>
      <div className="logo">
        <img src={logo}></img>
      </div>

      <div>
        <h1 className="title">Comece a coletar pokemons!</h1>
      </div>

      <div className="imageSide">
        <img src={imageSide}></img>
      </div>

      <div >
        <LoginButton></LoginButton>
      </div>


      
    </div>
  );
};
