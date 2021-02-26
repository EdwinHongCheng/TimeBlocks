import React from "react";
import Grid from "../grid/grid";
import { Link } from "react-router-dom";

import TaskCategoriesContainer from "../task_categories/task_categories_container";
import TaskListContainer from "../task_list/task_list_container";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesOpen: false,
      tasksOpen: false,
    };
    this.openCategories = this.openCategories.bind(this);
    this.openTaskList = this.openTaskList.bind(this);
    this.closePanels = this.closePanels.bind(this)
  }

  openCategories(e) {
    const taskListContainer = document.getElementById("task-list-container");
    const taskCategoriesContainer = document.getElementById(
      "task-categories-container"
    );

    if (!this.state.categoriesOpen) {
      if(this.state.tasksOpen) {
        taskListContainer.classList.remove("show")
        taskListContainer.classList.add("hide")
        this.setState({tasksOpen: false})
      }
      taskCategoriesContainer.classList.remove("hide");
      taskCategoriesContainer.classList.add("show");
      this.setState({ categoriesOpen: true });
    } else {
      taskCategoriesContainer.classList.remove("show");
      taskCategoriesContainer.classList.add("hide");
      this.setState({ categoriesOpen: false });
    }
  }

  openTaskList(e) {
    const taskListContainer = document.getElementById("task-list-container");
    const taskCategoriesContainer = document.getElementById(
      "task-categories-container"
    );

    if (!this.state.tasksOpen) {
      if (this.state.categoriesOpen) {
        taskCategoriesContainer.classList.remove("show");
        taskCategoriesContainer.classList.add("hide");
        this.setState({categoriesOpen: false})
      }
      taskListContainer.classList.remove("hide");
      taskListContainer.classList.add("show");
      this.setState({ tasksOpen: true });
    } else {
      taskListContainer.classList.remove("show");
      taskListContainer.classList.add("hide");
      this.setState({ tasksOpen: false });
    }
  }

  closePanels(e) {
    const taskListContainer = document.getElementById("task-list-container");
    const taskCategoriesContainer = document.getElementById(
      "task-categories-container"
    );

    if(this.state.tasksOpen) {
      taskListContainer.classList.remove("show")
      taskListContainer.classList.add("hide")
      this.setState({tasksOpen: false})
    }

    if(this.state.categoriesOpen) {
      taskCategoriesContainer.classList.remove("show")
      taskCategoriesContainer.classList.add("hide")
    }
  }

  render() {
    return (
      <div className="home-container" onClick={this.closePanels}>
        <TaskCategoriesContainer display={this.state.categoriesOpen} />
        <TaskListContainer display={this.state.tasksOpen} />

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
