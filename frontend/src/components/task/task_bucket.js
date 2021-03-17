import React, { useState, useEffect } from "react";

import { useDrop } from "react-dnd";

import TaskBucketTooltip from "./task_bucket_tooltip"

const TaskBucket = (props) => {
  const [color, setColor] = useState(props.grid.color);
  const [tooltip, setTooltip] = useState(props.grid.title);
  const [tooltipShowing, setTooltipShowing] = useState(false)

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

  let toggleTooltip = () => {
    setTooltipShowing(!tooltipShowing)
  }

  let showTooltip = () => setTooltipShowing(true)
  let hideTooltip = () => setTooltipShowing(false)

  return (
    <div ref={drop} className="bucket" 
      onClick={toggleTooltip}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      <div className="bucket-background" style={style}>
        <div className="task-time">
          <h1>{props.time}</h1>
        </div>
      </div>
      <TaskBucketTooltip message={tooltip} showing={tooltipShowing} />
    </div>
  );
};

export default TaskBucket;
