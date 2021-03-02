import React from "react";
import "./navbar.css";
function Navbar(){
  return (
    <nav className="navbar">
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
    </nav>
  );
}

export default Navbar;
