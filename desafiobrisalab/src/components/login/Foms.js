import React from "react";

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
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
    alert(this.state.email, this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form>
          <label>
            <input
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
              className="inputEmail"
            ></input>
          </label>

          <br></br>

          <label>
            <input
              type="password"
              placeholder="senha"
              value={this.state.password}
              onChange={this.handleChange}
              className="inputSenha"
            ></input>
          </label>
        </form>
      </div>
    );
  }
}

export default FormLogin;
