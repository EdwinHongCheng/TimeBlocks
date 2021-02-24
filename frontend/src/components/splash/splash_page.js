import React from "react";
import { Link } from "react-router-dom";
import FirstButtonsContainer from "../first_buttons/first_buttons_container";
import TimeBlocksLogo from "../../time-logo.png";

class SplashPage extends React.Component {
  render() {
    return (
      <div className="splash-background">
        <Link className="app-name" to={"/"}>
          TimeBlocks
        </Link>
        <div className="splash-body">
          <p className="splash-blurb">
            A touch-friendly time management app for keeping track of daily tasks!
          </p>

          {/* [ISSUE]: doesn't have it's own row */}
          {/* <img className="logo" src={TimeBlocksLogo} /> */}

        </div>
        <FirstButtonsContainer />
      </div>
    );
  }
}

export default SplashPage;
