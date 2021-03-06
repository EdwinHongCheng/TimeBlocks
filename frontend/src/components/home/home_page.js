import React from "react";
import GridContainer from "../grid/grid_container";
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
        taskListContainer.remove("show");
        taskListContainer.add("hide");
      }
      taskCategoriesContainer.remove("hide")
      taskCategoriesContainer.add("show");
    } else {
      taskCategoriesContainer.remove("show");
      taskCategoriesContainer.add("hide");
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

    let allowedElements = ["show-categories", "show-tasks", "createCategoryTitle",
                          "createCategoryColor", "createCategoryButton", "delete-category",
                          "category-color-select", "task-input", "task-button", "remove-task-icon", "color-choice"]
    if(allowedElements.includes(e.target.id)) return;
    // if(e.target.id != e.currentTarget.id) return;

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
          
          <p id="show-categories" onClick={this.openCategories}>Categories</p>

          <Link className="prof-page-button" to="/profile-page">
            Profile Page
          </Link>

          <p id="show-tasks" onClick={this.openTaskList}>Task List</p>

        </div>
        <GridContainer />
      </div>
    );
  }
}

export default HomePage;
