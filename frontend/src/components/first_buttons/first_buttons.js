import React from "react";
import { Link } from "react-router-dom";


class FirstButtons extends React.Component {
  constructor(props) {
    super(props);
    // this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  // logoutUser(e) {
  //   e.preventDefault();
  //   this.props.logout();
  // }

  getLinks() {
    // if (this.props.loggedIn) {
    //   return (
    //     <div>
    //       <button onClick={this.logoutUser}>Logout</button>
    //     </div>
    //   );
    // } else {
      return (
        <div>
          <div className="first-buttons">
            <div>
              <Link className="login-button" to={"/login"}>Login</Link>
            </div>
            <div>
              <Link className="signup-button" to={"/signup"}>Signup</Link>
            </div>
          </div>
        </div>
      );
    // }
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
