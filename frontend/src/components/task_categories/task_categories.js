import React, { useEffect, useState } from "react";
import TaskCategoryItem from "./task_category_item"

const TaskCategories = (props) => {
  
  const [categories, setCategories] = useState(props.categories)

  useEffect(() => {
    props.fetchCategories(props.currentUser.id)
  }, categories)

  console.log(props)
  return (
    <div id="task-categories-container" className="hide">
      <div className="categories-title-box">
        <h1>Categories</h1>
      </div>
      <div className="categories-list">
        {props.categories.map((category) => {
          return <TaskCategoryItem key={category._id} category={category} />;
        })}
      </div>
    </div>
  );
}

export default TaskCategories;