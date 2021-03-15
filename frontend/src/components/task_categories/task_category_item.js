import React from 'react';
import Task from "../task/task";
import TaskFormContainer from './task_form_container';
// import {destroyCategory} from "../../actions/category_actions"

const TaskCategoryItem = (props) => {
    const handleClick = (taskId) => {
      props.destroyTask(taskId)
        .then(() =>
          props.fetchUserGrids(props.currentId)
        )
    }

    return (
      <div className="category-container">
        <div className="category-info">
        <h2 id="delete-category" onClick={() => props.destroyCategory(props.category._id)}>x</h2>
          <h1>{props.category.title}</h1>
          <h2>{props.category.tasks.length}</h2>
        </div>
        <div className="add-task-container">
          <TaskFormContainer catId={props.category._id}/>
        </div>
        <div className="category-tasks">
          {props.category.tasks.map((task) => {
            return (
                <div className="task-entry" key={task._id}>
                    <div className="task-icon-title">
                      <i onClick={() => handleClick(task._id)}
                      id="remove-task-icon"
                      className="far fa-times-circle"></i>
                      <h1>{task.title}</h1>
                    </div>
                    <Task task={task} color={props.category.color} />
                </div>
            )
          })}
        </div>
      </div>
    );
}

export default TaskCategoryItem;