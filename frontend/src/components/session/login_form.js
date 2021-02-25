import React from "react";
import { withRouter, Link } from "react-router-dom";
import TimeBlocksLogo from "../../time-logo.png";

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
    // [NOTE] "Return/Enter" -> form is submitted
    let enterSubmitsForm = this.handleSubmit;
    document.onkeydown = function(e) {
        if (e.keyCode === 13) {
          enterSubmitsForm(e)
        }
    };

    return (
      <div className="splash-background">
        <Link className="app-name" to={"/"}>TimeBlocks</Link>

        <form className="login-form" onSubmit={this.handleSubmit}>

          <img className="logo" src={TimeBlocksLogo} alt="TimeBlocks Logo" />

          <input
            type="text"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="Email"
          />

          <p className="rendered-error">
            {this.props.errors.email}
          </p>

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
          <p className="submit-button" onClick={this.handleSubmit}>Log In</p>
          <Link className="back-to-splash-button" to={"/"}>Back</Link>
        </div>

      </div>
    );
  }
}

export default withRouter(LoginForm);
