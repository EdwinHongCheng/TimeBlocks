import React from "react";
import Grid from "../grid/grid";
// import CategoryContainer from "../task_categories/task_categories_container"
// import Menu from "../sliding_menu/sliding_pane"

import TaskCategoriesContainer from "../task_categories/task_categories_container";
import TaskListContainer from "../task_list/task_list_container";

import LogoutButtonContainer from "../logout/logout_button_container";

class HomePage extends React.Component {

    render() {
        return (
          <div className="home-container">
            <Grid />
            {/* <CategoryContainer/> */}
            {/* <Menu/> */}
            <Link to="/profile-page">Profile Page</Link>
          </div>
        );
    }

}

export default HomePage;
