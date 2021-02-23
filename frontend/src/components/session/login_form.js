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
    // this.renderErrors = this.renderErrors.bind(this);
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

  // Render the session errors if there are any
  // renderErrors() {
  //   return (
  //     <ul>
  //       {Object.keys(this.state.errors).map((error, i) => (
  //         <li key={`error-${i}`}>{this.state.errors[error]}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    return (
      <div className="login-signup-background">
        <Link className="app-name" to={"/"}>TimeBlocks</Link>
        <br />
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div>

            <div className="first-input-field">
              <input
                className="first-input-field"
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
            </div>
            <p className="rendered-error">
              {this.props.errors.email || "placeholder"}
            </p>
            <br />

            <div className="first-input-field">
              <input
                className="first-input-field"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
            </div>
            <p className="rendered-error">
              {this.props.errors.password || "placeholder"}
            </p>

          </div>
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
