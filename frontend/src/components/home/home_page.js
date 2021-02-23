import React from "react"
import Grid from "../grid/grid";
import FirstButtonsContainer from "../first_buttons/first_buttons_container";

class HomePage extends React.Component {
    render() {
        return (
          <div className="home-container">
            <Grid />
          </div>
        );
    }
}

export default HomePage;