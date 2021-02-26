import React from "react";

import TaskBucketContainer from "../task/task_bucket_container";

const Grid = (props) => {
  let times = []

  for (let i = 1; i < 25; i++) {
    times.push(i)
  }

  return ( 
    <div className="grid">
      {times.map(time => {
        

        return (
          <TaskBucketContainer key={time} time={time}>
            <div className="task-time">
              <h1>{time}</h1>
            </div>
          </TaskBucketContainer>
        );
      })}
    </div>
  );
};

export default Grid;
