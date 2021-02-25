import React from "react";

import TaskListItem from "./task_list_item"

const TaskList = (props) => {
    return (
        <div className="task-list-container">
            {props.tasks.map((task, idx) => {
                return (
                    <TaskListItem key={idx} task={task}/>
                )
            })}
        </div>
    )
}

export default TaskList;
