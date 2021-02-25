import React, { useRef, useState } from "react";

import { useDrop } from "react-dnd";
import Task from "./task";

const TaskBucket = (props) => {
  const [color, setColor] = useState("#fff4b7");

  let newColor = color => {
      setColor(color)
      console.log(color)
  }

  const [, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item, monitor) => {
        setColor(item.color)
        // Bucket.current.style.backgroundColor = item.color;
    },
  }));

  let style = {
      backgroundColor: color
  }

  return (
    <div ref={drop} className="bucket">
      {/* <Task color={color}>{props.children}</Task> */}
      <div style={style} className="task">{props.children}</div>
    </div>
  );
};

export default TaskBucket;
