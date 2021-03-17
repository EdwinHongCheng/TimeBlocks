import React, { useState, useEffect } from "react";

import TaskBucketTooltip from "../task/task_bucket_tooltip";

const FriendTaskBucket = (props) => {
  const [color, setColor] = useState(props.grid.color);
  const [tooltip, setTooltip] = useState(props.grid.title);
  const [tooltipShowing, setTooltipShowing] = useState(false)

  useEffect(() => {
    setColor(props.grid.color)
    setTooltip(props.grid.title)
  }, [props])

  let style = {
      backgroundColor: color
  }

  let showTooltip = () => setTooltipShowing(true)
  let hideTooltip = () => setTooltipShowing(false)

  return (
    <div className="friend-bucket"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      <div className="friend-bucket-background" style={style}>
          <div className="friend-task-time">
            <h1>{props.time}</h1>
          </div>
      </div>
      <TaskBucketTooltip message={tooltip} showing={tooltipShowing} />
      {/* <span className="tooltip">{tooltip}</span> */}
    </div>
  );
};

export default FriendTaskBucket;
