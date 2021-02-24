import React from "react";
import { Link } from "react-router-dom";
import FirstButtonsContainer from "../first_buttons/first_buttons_container";

class SplashPage extends React.Component {
  render() {
    return (
      <div className="login-signup-background">
        <Link className="app-name" to={"/"}>
          TimeBlocks
        </Link>
        <p className="logo-image">TimeBlocks: short description</p>
        <FirstButtonsContainer />
      </div>
    );
  }
}

export default SplashPage;
