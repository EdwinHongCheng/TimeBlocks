import React, { useEffect } from "react";

import TaskBucketContainer from "../task/task_bucket_container";

const Grid = (props) => { 
  let tasks = []
  for (let i = 1; i < 25; i++) {
    tasks.push(i)
  }

  useEffect(() => {
      props.fetchUserGrids(props.currentUser.id)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return ( 
    <div className="grid">
      {tasks.map(time => {
        let grid = {
          color: "#fff4b7",
          title: ""
        }

        if (props.grids[time] !== undefined) {
          grid = props.grids[time]
        }

        return (
          <TaskBucketContainer grid={grid} key={time} time={time} />
        );
      })}
    </div>
  );
};

export default Grid;
