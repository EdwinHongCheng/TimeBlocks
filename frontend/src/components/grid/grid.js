import React, { useEffect, useState } from "react";

import TaskBucketContainer from "../task/task_bucket_container";

const Grid = (props) => {
  
  let tasks = []
  for (let i = 1; i < 25; i++) {
    tasks.push(i)
  }

  const [grids, setGrids] = useState(props.grids)

  useEffect(() => {
      props.fetchUserGrids(props.currentUser.id)
  }, [])

  console.log(grids)
  console.log(props.grids)

  return ( 
    <div className="grid">
      {tasks.map(time => {
        let color = "#fff4b7";

        if (props.grids[time] != undefined) {
          color = props.grids[time].color
        }

        return (
          <TaskBucketContainer color={color} key={time} time={time} />
        );
      })}
    </div>
  );
};

export default Grid;
