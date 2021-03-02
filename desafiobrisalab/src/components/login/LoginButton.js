import React from "react";
import "./Login.css";

class LoginButton extends React.Component {
  handleClick() {
    console.log("this is:", this);
  }

  render() {
    return <button className="loginButton"
    onClick={() => this.handleClick()}>
       Entrar
    </button>;
  }
}

export default LoginButton
