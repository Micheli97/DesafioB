import React from "react";

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password : "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      email: event.target.value,
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
            placeholder = "email"
              value={this.state.email}
              onChange={this.handleChange}
              className="inputEmail"
            ></input>
          </label>

          <br></br>

          <label>
            <input
             placeholder = "senha"
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
