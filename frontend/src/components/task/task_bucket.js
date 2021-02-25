import React, { useRef, useState } from "react";

import { useDrop } from "react-dnd";
import Task from "./task";

const TaskBucket = (props) => {
  const [color, setColor] = useState("#fff4b7");

  const [collectedProps, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item, monitor) => {
      console.log(item.color);
      setColor(item.color);
    },
  }));

  return (
    <div ref={drop} className="bucket">
      <Task color={color}>{props.children}</Task>
    </div>
  );
};

export default TaskBucket;
