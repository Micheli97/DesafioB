import React from "react";
import  sha256 from "crypto-js/sha256";
import "./login.css";

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const token = this.generateToken(this.state.password)
    localStorage.setItem("tk", token)
    window.location.href = "/pokemon-list"
  }

  generateToken(password){
    return sha256(password)
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <div>
            <input
              placeholder="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
              className="inputEmail"
            ></input>
          </div>

          <div>
            <input
              type="password"
              placeholder="senha"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              className="inputSenha"
            ></input>
          </div>

          <div>
            <button className="loginButton" type="submit">
              Entrar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormLogin;
