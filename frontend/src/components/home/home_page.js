import React from "react"
import Grid from "../grid/grid";
import Task from "../task/task"

import LogoutButtonContainer from "../logout/logout_button_container";

class HomePage extends React.Component {
    render() {
        return (
          <div className="home-container">
            <Grid />
            <Task color={"#ff0000"}/>
            <LogoutButtonContainer />
          </div>
        );
    }
}

export default HomePage;