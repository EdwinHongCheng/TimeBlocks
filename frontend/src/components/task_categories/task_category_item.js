import React from 'react';
import Task from "../task/task"

const TaskCategoryItem = (props) => {
    return (
        <div className="category-container">
            <div className="category-info">
                <h1>{props.category.text}</h1>
                <h2>{props.category.tasks.length}</h2>
            </div>
            <div className="category-tasks">
                {props.category.tasks.forEach(task => {
                    return (
                        <Task color="#ff0000"></Task>
                    )
                })}
            </div>
        </div>
    )
}

export default TaskCategoryItem;