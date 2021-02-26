import React, { useEffect, useState } from "react";
import TaskCategoryItem from "./task_category_item"

const TaskCategories = (props) => {
  
  const [categories, setCategories] = useState(props.categories)

  useEffect(() => {
    props.fetchCategories(props.currentUser.id)
  }, categories)

  return (
    <div className="task-categories-container">
      {props.categories.map(category => {
        return (
          <TaskCategoryItem key={category._id} category={category} />
        )
      })}
    </div>
  );
}

export default TaskCategories;