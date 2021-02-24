import React from "react";
import { withRouter, Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // [WORKS] clears errors
  componentWillUnmount() {
    this.props.clearErrors()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/tweets");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(user);
  }

  render() {
    return (
      <div className="login-signup-background">
        <Link className="app-name" to={"/"}>TimeBlocks</Link>
        <br />

        <form className="login-form" onSubmit={this.handleSubmit}>

          <input
            type="text"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="Email"
          />

          <p className="rendered-error">
            {this.props.errors.email}
          </p>
          <br />

          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            placeholder="Password"
          />

          <p className="rendered-error">
            {this.props.errors.password}
          </p>

        </form>

        <div className="first-buttons">
          <p className="submit-button" onClick={this.handleSubmit}>Submit</p>
          <Link className="back-to-splash-button" to={"/"}>Back</Link>
        </div>

      </div>
    );
  }
}

export default withRouter(LoginForm);
