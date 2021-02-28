import React from 'react';
import Task from "../task/task";
import TaskFormContainer from './task_form_container';
// import {destroyCategory} from "../../actions/category_actions"

const TaskCategoryItem = (props) => {
    return (
      <div className="category-container">
        <div className="category-info">
         <button id= "deleteCategory" onClick={() => props.destroyCategory(props.category._id)}>&#10006;</button>
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
                    <h1>{task.title}</h1>
                    <Task task={task} color={props.category.color} />
                </div>
            )
          })}
        </div>
      </div>
    );
}

export default TaskCategoryItem;