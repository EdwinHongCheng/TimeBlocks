import React, { useState, useEffect } from "react";

import { useDrop } from "react-dnd";

const TaskBucket = (props) => {
  const [color, setColor] = useState(props.color);

  const [, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item, monitor) => {
        setColor(item.color)
        console.log(item.id, props.currentUser)
    },
  }));

  useEffect(() => {
    setColor(props.color)
  }, [props.color])

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
    </div>
  );
};

export default TaskBucket;
