import React from "react";
import Grid from "../grid/grid";
// import CategoryContainer from "../task_categories/task_categories_container"
// import Menu from "../sliding_menu/sliding_pane"

import TaskCategoriesContainer from "../task_categories/task_categories_container";
import TaskListContainer from "../task_list/task_list_container";

import LogoutButtonContainer from "../logout/logout_button_container";

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.openTaskList = this.openTaskList.bind(this)
  }

  openTaskList(e) {

  }

  render() {
    return (
      <div className="home-container">
        {/* <TaskCategoriesContainer /> */}
        {/* <TaskListContainer /> */}

        <input type="button" onClick={this.openTaskList} />
        <Grid />
        {/* [TEST][WORKS] Profile Page */}
        <Link to="/profile-page">Profile Page</Link>
      </div>
    );
  }
}

export default HomePage;
