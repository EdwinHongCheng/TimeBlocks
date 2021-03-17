import React, { useState, useEffect } from "react";

const FriendTaskBucket = (props) => {
  const [color, setColor] = useState(props.grid.color);
  const [tooltip, setTooltip] = useState(props.grid.title);
  const [tooltipShowing, setTooltipShowing] = useState(false)

  useEffect(() => {
    setColor(props.grid.color)
    setTooltip(props.grid.title)
  }, [props.grid])

  let style = {
      backgroundColor: color
  }

  let toggleTooltip = () => {
    setTooltip(!tooltipShowing);
  }

  let showTooltip = () => setTooltipShowing(true)
  let hideTooltip = () => setTooltipShowing(false)

  return (
    <div className="friend-bucket"
      onClick={toggleTooltip}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      <div className="friend-bucket-background" style={style}>
          <div className="friend-task-time">
            <h1>{props.time}</h1>
          </div>
      </div>
    </div>
  );
};

export default FriendTaskBucket;
