import React from "react";

import Task from "../task/task"
import TaskListItem from "./task_list_item"

const TaskList = (props) => {
    return (
      <div className="task-list-container">
        <div className="task-list-title">
            {/* <h1>Color</h1> */}
            <h1>Task Name</h1>
            <h1>Hour</h1>
        </div>
        <div className="task-list-entries">
        {/* <Task color="#00ff00"/> */}
          {props.tasks.map((task, idx) => {
            return <TaskListItem key={idx} task={task} />;
          })}
        </div>
      </div>
    );
}

export default TaskList;
