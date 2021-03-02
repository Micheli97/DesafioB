import React from "react";

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handleSubmit(event) {
    alert(this.state.email);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              className="inputs"
            ></input>
          </label>
        </form>
      </div>
    );
  }
}

export default FormLogin;
