import React, { useEffect } from "react";

import FriendTaskBucketContainer from "../friend_task/friend_task_bucket_container";

// [WORKS] copy of "grid.js" (may edit it, change CSS, etc.)
const ShowFriendGrid = (props) => { 
  let tasks = []
  for (let i = 1; i < 25; i++) {
    tasks.push(i)
  }

  useEffect(() => {
      props.fetchUserGrids(props.currentFriend.id)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return ( 
    <div className="show-friend-grid">
      {tasks.map(time => {
        let grid = {
          color: "#fff4b7",
          title: ""
        }

        if (props.grids[time] !== undefined) {
          grid = props.grids[time]
        }

        return (
          <FriendTaskBucketContainer
            grid={grid} 
            key={time} 
            time={time} 
          />
        );
      })}
    </div>
  );
};

export default ShowFriendGrid;
