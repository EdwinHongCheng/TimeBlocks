import React from 'react';
import Task from "../task/task"

const TaskCategoryItem = (props) => {
    return (
      <div className="category-container">
        <div className="category-info">
          <h1>{props.category.title}</h1>
          <h2>{props.category.tasks.length}</h2>
        </div>
        <div className="category-tasks">
          {props.category.tasks.map((task) => {
            return (
                <Task key={task._id} color={props.category.color} />
            )
          })}
        </div>
      </div>
    );
}

export default TaskCategoryItem;