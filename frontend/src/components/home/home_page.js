import React from "react"
import Grid from "../grid/grid";
// import CategoryContainer from "../task_categories/task_categories_container"
import Menu from "../sliding_menu/sliding_pane"

class HomePage extends React.Component {

    render() {
        return (
          <div className="home-container">
            <Grid />
            {/* <CategoryContainer/> */}
            <Menu/>
          </div>
        );
    }
}

export default HomePage;