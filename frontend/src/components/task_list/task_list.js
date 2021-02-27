import React from "react";

import TaskListItem from "./task_list_item"

const TaskList = (props) => {
    return (
      <div id="task-list-container" className="hide">
        <div className="task-list-title">
            <h1>Task Name</h1>
            <h1>Hour</h1>
        </div>
        <div className="task-list-entries">
          {props.tasks.map((task, idx) => {
            return <TaskListItem key={idx} task={task} />;
          })}
        </div>
      </div>
    );
}

export default TaskList;
