import React from "react";
import ExitButton from "./exitbutton";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="menu">
        <div className="logo"></div>
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

      <div>
        <button className="button">Sair</button>
      </div>
    </nav>
  );
}

export default Navbar;
