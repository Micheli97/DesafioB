import React from "react";
import Forms from "./foms";

import "./login.css";

class Login extends React.Component{
  
  render(){

    const token = localStorage.getItem("tk")
    if(token){
      window.location.replace("/pokemon-list")
      return null
    }

    return (
      <div className="background">
        <div className="form">
          <div className="logoLogin"></div>
          <h2>Comece a coletar pokémons!</h2>
          <Forms></Forms>
         
        </div>
      </div>
    )
  }
}

export default Login;
