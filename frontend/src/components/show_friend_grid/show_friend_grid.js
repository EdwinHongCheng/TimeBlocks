import React, { useEffect } from "react";

import TaskBucketContainer from "../task/task_bucket_container";

// [TEST] copy of "grid.js" (may edit it, change CSS, etc.)

const ShowFriendGrid = (props) => { 
  let tasks = []
  for (let i = 1; i < 25; i++) {
    tasks.push(i)
  }

  useEffect(() => {
      props.fetchUserGrids(props.currentUser.id)
  }, [])

  return ( 
    <div className="show-friend-grid">
      {tasks.map(time => {
        let color = "#fff4b7";

        if (props.grids[time] !== undefined) {
          color = props.grids[time].color
        }

        return (
          <TaskBucketContainer 
            // color={color} 
            key={time} 
            time={time} 
          />
        );
      })}
    </div>
  );
};

export default ShowFriendGrid;
