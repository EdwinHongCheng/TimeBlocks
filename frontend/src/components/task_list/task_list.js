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

  return (
    <div id="task-list-container" className="hide">
      <div className="task-list-title">
        <h1>Today's Tasks</h1>
      </div>
      <div className="task-list-entries">
        {grids.map((gridItem, idx) => {
          return <TaskListItem key={idx} task={gridItem} />;
        })}
      </div>
    </div>
  );
};

export default TaskList;
