import React, { useEffect } from "react";

import TaskBucketContainer from "../task/task_bucket_container";

// [TEST] copy of "grid.js" (may edit it, change CSS, etc.)

const ShowFriendGrid = (props) => {
  let tasks = []

  for (let i = 1; i < 25; i++) {
    // if (props.grids[i] == undefined) {

    // } 
    tasks.push(i)
  }

  // useEffect(() => {
  //   props.fetchUserGrids(props.currentUser.id)
  // })

  return ( 
    <div className="grid">
      {tasks.map(time => {
        // console.log(time)

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

export default ShowFriendGrid;
