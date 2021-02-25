import React from "react"
import Grid from "../grid/grid";
import CategoryContainer from "../task_categories/task_categories_container"

class HomePage extends React.Component {
    render() {
        return (
          <div className="home-container">
            <Grid />
            <CategoryContainer/>
          </div>
        );
    }
}

export default HomePage;