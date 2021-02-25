import React from "react"
import Grid from "../grid/grid";
import CategoryContainer from "../task_categories/task_categories_container"
import Menu from "../task_categories/sliding_pane"

class HomePage extends React.Component {

    render() {
        return (
          <div className="home-container">
            <Grid />
            <CategoryContainer/>
            <Menu/>
          </div>
        );
    }
}

export default HomePage;