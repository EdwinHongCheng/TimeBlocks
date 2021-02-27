import React, { useState } from "react";

import { useDrop } from "react-dnd";

const TaskBucket = (props) => {
  const [color, setColor] = useState("#fff4b7");

  const [, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item, monitor) => {
        setColor(item.color)
        console.log(item.id, props.currentUser)
    },
  }));

  let style = {
      backgroundColor: color
  }

  return (
    <div ref={drop} className="bucket">
      <div style={style} className="task">{props.children}</div>
    </div>
  );
};

export default TaskBucket;
