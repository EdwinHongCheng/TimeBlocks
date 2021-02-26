import React from "react";
import Grid from "../grid/grid";
import { Link } from "react-router-dom";

import TaskCategoriesContainer from "../task_categories/task_categories_container";
import TaskListContainer from "../task_list/task_list_container";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.openCategories = this.openCategories.bind(this);
    this.openTaskList = this.openTaskList.bind(this);
    this.closePanels = this.closePanels.bind(this);
  }

  openCategories(e) {
    const taskListContainer = document.getElementById("task-list-container").classList;
    const taskCategoriesContainer = document.getElementById(
      "task-categories-container"
    ).classList;

    if (taskCategoriesContainer.contains("hide")) {
      if (taskListContainer.contains("show")) {
        taskListContainer.classList.remove("show");
        taskListContainer.classList.add("hide");
      }
      taskCategoriesContainer.remove("hide")
      taskCategoriesContainer.add("show");
    } else {
      taskCategoriesContainer.classList.remove("show");
      taskCategoriesContainer.classList.add("hide");
    }
  }

  openTaskList(e) {
    const taskListContainer = document.getElementById("task-list-container")
      .classList;
    const taskCategoriesContainer = document.getElementById(
      "task-categories-container"
    ).classList;

    if (taskListContainer.contains("hide")) {
      if (taskCategoriesContainer.contains("show")) {
        taskCategoriesContainer.remove("show");
        taskCategoriesContainer.add("hide");
      }
      taskListContainer.remove("hide");
      taskListContainer.add("show");
    } else {
      taskListContainer.remove("show");
      taskListContainer.add("hide");
    }
  }

  closePanels(e) {
    const taskListContainer = document.getElementById("task-list-container")
      .classList;
    const taskCategoriesContainer = document.getElementById(
      "task-categories-container"
    ).classList;

    if(e.target.id == "show-categories" || e.target.id == "show-tasks") return;

    if (taskListContainer.contains("show")) {
      taskListContainer.remove("show");
      taskListContainer.add("hide");
    }

    if (taskCategoriesContainer.contains("show")) {
      taskCategoriesContainer.remove("show");
      taskCategoriesContainer.add("hide");
    }
  }

  render() {
    return (
      <div className="home-container" onClick={this.closePanels}>
        <TaskCategoriesContainer />
        <TaskListContainer />

        <div className="panel-buttons">
          <input
            id="show-categories"
            type="button"
            onClick={this.openCategories}
            value="Show Categories"
          />

          <Link className="prof-page-button" to="/profile-page">
            Profile Page
          </Link>

          <input
            id="show-tasks"
            type="button"
            onClick={this.openTaskList}
            value="Show Task List"
          />
        </div>
        <Grid />
      </div>
    );
  }
}

export default HomePage;
