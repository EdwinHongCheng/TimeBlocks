import React from "react";
import { Link } from "react-router-dom";


class FirstButtons extends React.Component {
  constructor(props) {
    super(props);
    // this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  getLinks() {
    return (
      <div className="first-buttons">
        <div>
          <Link className="login-button" to={"/login"}>Login</Link>
        </div>
        <div>
          <Link className="signup-button" to={"/signup"}>Signup</Link>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.getLinks()}
      </div>
    );
  }
}

export default FirstButtons;
