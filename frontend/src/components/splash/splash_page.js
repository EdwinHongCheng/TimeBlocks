import React from "react";
import { Link } from "react-router-dom";
import FirstButtonsContainer from "../first_buttons/first_buttons_container";
import TimeBlocksLogo from "../../time-logo.png";

class SplashPage extends React.Component {
  render() {
    return (
      <div className="splash-background">
        <div className="app-name-parent">
          <Link className="app-name" to={"/"}>
            TimeBlocks
          </Link>
        </div>
        <div className="splash-body">
          <div className="splash-blurb">
            <p>
              A touch-friendly time management app!
            </p>
            <p>
              Keep track of daily tasks!
            </p>
          </div>
          <img className="splash-image" src={TimeBlocksLogo} alt="TimeBlocks Logo" />
        </div>
        <FirstButtonsContainer />
        <div className="splash-icon">
          <a href="https://github.com/EdwinHongCheng/TimeBlocks"><i className="fab fa-github"></i></a>
        </div>
      </div>
    );
  }
}

export default SplashPage;
