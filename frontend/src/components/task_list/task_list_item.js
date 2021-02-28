import React from "react"

const TaskListItem = (props) => {
    return(
        <div className="task-list-item">
            <h1>{props.task.title}</h1>
            <h1>{props.task.hour}</h1>
        </div>
    )
}

export default TaskListItem;