import React from "react";

import TaskBucket from "../task/task_bucket";

const Grid = (props) => {
  let times = []

  for (let i = 1; i < 25; i++) {
    times.push(i)
  }

  return ( 
    <div className="grid">
      {times.map(time => {
        return (
          <TaskBucket time={time}>
            <div className="task-time">              
              <h1>{time}</h1>
            </div>
          </TaskBucket>
        )
      })}
    </div>
  );
};

export default Grid;
