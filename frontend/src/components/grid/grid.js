import React, { useEffect, useState } from "react";

import TaskBucketContainer from "../task/task_bucket_container";

const Grid = (props) => {
  let tasks = []
  const [grids, setGrids] = useState(Object.values(props.grids))

  for (let i = 1; i < 25; i++) {
    tasks.push(i)
  }

  console.log(props.grids)

  useEffect(() => {
    props.fetchUserGrids(props.currentUser.id)
  }, [props.grids])

  return ( 
    <div className="grid">
      {tasks.map(time => {
        let color = "#fff4b7";

        if (props.grids[time] != undefined) {
          color = props.grids[time].color
        }

        return (
          <TaskBucketContainer color={color} key={time} time={time}>
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
