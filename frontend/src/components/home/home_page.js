import React from "react";
import Grid from "../grid/grid";
// [TEST][WORKS] Profile Page
import { Link } from "react-router-dom";

import CategoryContainer from "../task_categories/task_categories_container"

import TaskCategoriesContainer from "../task_categories/task_categories_container";
import TaskListContainer from "../task_list/task_list_container";

import LogoutButtonContainer from "../logout/logout_button_container";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-container">
        <Grid />
          {/* [TEST][WORKS] Profile Page */}
          <Link className="prof-page-button" to="/profile-page">Profile Page</Link>
      </div>
    );
  }
}

export default HomePage;
