import React, { useEffect } from "react";
import TaskCategoryItem from "./task_category_item"
import CategoryComposeContainer from "./category_compose_container"


const TaskCategories = (props) => {
  useEffect(() => {
    props.fetchCategories(props.currentUser.id)
  }, [])

  return (
    <div id="task-categories-container" className="hide">
      <div className="categories-title-box">
        <h1>Categories</h1>
      </div>
      <div className="categories-list">
      {props.categories.map((category) => {
          return <TaskCategoryItem key={category._id} category={category}
          currentId={props.currentUser.id} fetchUserGrids={props.fetchUserGrids}
          destroyCategory = {props.destroyCategory} destroyTask={props.destroyTask}/>;
        })}
        <CategoryComposeContainer/>
      </div>
    </div>
  );
}

export default TaskCategories;