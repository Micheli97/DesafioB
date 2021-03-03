import React from "react";
import "./navbar.css";

class Navbar extends React.Component{
  render(){
    return (
      <nav className="navbar">
        <div className="menu">
          <div className="logo"></div>
          <ul>
            <li>
              <a href="#">Favorito</a>
            </li>
            <li>
              <a href="#">Procurar</a>
            </li>
            <li>
              <a href="#">Ver todos</a>
            </li>
          </ul>
        </div>
  
        <div>
          <button className="button">Sair</button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
