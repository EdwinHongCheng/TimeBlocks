import React from "react"
import Grid from "../grid/grid";
import { Link } from "react-router-dom";
import FirstButtonsContainer from "../first_buttons/first_buttons_container";

class HomePage extends React.Component {
    render() {
        return (
          <>
            <Grid />
            <div className="login-signup-background">
              <Link className="app-name" to={"/"}>
                TimeBlocks
              </Link>
              <h1 className="logo-image">LOGO</h1>
              <FirstButtonsContainer />
            </div>
          </>
        );
    }
}

export default HomePage;