import React from "react";
import { withRouter, Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/login");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.signup(user, this.props.history);
  }

  render() {
    return (
      <div className="login-signup-background">
        <Link className="app-name" to={"/"}>TimeBlocks</Link>
        <br />
        <form className="signup-form" onSubmit={this.handleSubmit}>
        

          <input
            type="text"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="Email"
          />

          <p className="rendered-error">
            {this.props.errors.email || "placeholder"}
          </p>
          <br />

          <input
            type="text"
            value={this.state.name}
            onChange={this.update("name")}
            placeholder="Name"
          />


          <p className="rendered-error">
            {this.props.errors.name || "placeholder"}
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


          <br />

          <input
            type="password"
            value={this.state.password2}
            onChange={this.update("password2")}
            placeholder="Confirm Password"
          />


          <p className="rendered-error">
            {this.props.errors.password2}
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

export default withRouter(SignupForm);
