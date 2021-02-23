import React from "react";
import { Link, Redirect } from "react-router-dom";

class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.logoutButton = this.logoutButton.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
    return (<Link to={"/"}/>)
  }

  logoutButton() {
    if (this.props.loggedIn) {
      return (
        <div>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        {this.logoutButton()}
      </div>
    );
  }
}

export default LogoutButton;