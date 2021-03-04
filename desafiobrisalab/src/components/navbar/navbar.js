import React from "react";
import { FiLogOut } from "react-icons/fi";
import "./navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleExit = this.handleExit.bind(this);
  }

  handleExit() {
    localStorage.removeItem("tk");
    window.location.href = "/";
  }

  render() {
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

        <button onClick={this.handleExit} className="exitButton">
          Sair
          <FiLogOut className="exit-icon"></FiLogOut>
        </button>
      </nav>
    );
  }
}

export default Navbar;
