import React, { useState, useEffect } from "react";

import TaskListItem from "./task_list_item";

const TaskList = (props) => {

  let grids = []

  for(let grid in props.grids) {
    let gridItem = {
      color: props.grids[grid].color,
      title: props.grids[grid].title,
      hour: grid
    }
    grids.push(gridItem)
  }

  console.log(grids)

  return (
    <div id="task-list-container" className="hide">
      <div className="task-list-title">
        <h1>Task Name</h1>
        <h1>Hour</h1>
      </div>
      <div className="task-list-entries">
        {grids.map((gridItem) => {
          return <TaskListItem task={gridItem} />;
        })}
      </div>
    </div>
  );
};

export default TaskList;
