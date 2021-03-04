import React from "react";
import {FiLogOut} from "react-icons/fi"
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"></div>
      <div className="menu">
        <ul>
          <li>
            <a>Favorito</a>
          </li>
          <li>
            <a>Procurar</a>
          </li>
          <li>
            <a>Ver todos</a>
          </li>
        </ul>
      </div>
      
      <button className="exitButton">Sair
        <FiLogOut className="exit-icon"></FiLogOut>
      </button>
    </nav>
  );
}

export default Navbar;
