import React from "react";
import { Link } from "react-router-dom";
import FirstButtonsContainer from "../first_buttons/first_buttons_container";

class SplashPage extends React.Component {
  render() {
    return (
      <div className="splash-background">
        <Link className="app-name" to={"/"}>
          TimeBlocks
        </Link>
        <p className="splash-blurb">
          A touch-friendly time management app for keeping track of daily tasks!
        </p>
        <FirstButtonsContainer />
      </div>
    );
  }
}

export default SplashPage;
