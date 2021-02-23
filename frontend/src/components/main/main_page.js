import React from "react";
import { Link } from "react-router-dom";
import FirstButtonsContainer from "../first_buttons/first_buttons_container";

class MainPage extends React.Component {
    render() {
        return (
          <div className="login-signup-background">
            <Link className="app-name" to={"/"}>TimeBlocks</Link>
            <h1 className="logo-image">LOGO</h1>
            <FirstButtonsContainer />
          </div>
        );
    }
}

export default MainPage;