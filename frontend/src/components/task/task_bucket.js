import React, { useState, useEffect } from "react";

import { useDrop } from "react-dnd";

import TaskBucketTooltip from "./task_bucket_tooltip"

const TaskBucket = (props) => {
  const [color, setColor] = useState(props.grid.color);
  const [tooltip, setTooltip] = useState(props.grid.title);

  const [, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item, monitor) => {
        setColor(item.color)
        props.updateUserGrid(props.time, {
          taskId: item.id,
          title: item.title,
          color: item.color,
          userId: props.currentUser.id
        })
        setTooltip(item.title)
    },
  }));

  useEffect(() => {
    setColor(props.grid.color)
    setTooltip(props.grid.title)
  }, [props.grid])

  let style = {
      backgroundColor: color
  }

  return (
    <div ref={drop} className="bucket">
      <div className="bucket-background" style={style}>
          <div className="task-time">
            <h1>{props.time}</h1>
          </div>
      </div>
      <TaskBucketTooltip message={tooltip} />
    </div>
  );
};

export default TaskBucket;
