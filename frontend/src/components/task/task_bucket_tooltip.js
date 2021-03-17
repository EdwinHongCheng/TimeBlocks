import React from "react";

const TaskBucketTooltip = (props) => {
  console.log(props.message)
  console.log(props.showing)
  if (props.message === "" || !props.showing) {
    return null;
  } else {
    return <span className="tooltip">{props.message}</span>;
  }
};

export default TaskBucketTooltip;
