import React from "react";

import { useDrop } from "react-dnd"
import Task from "./task"

const TaskBucket = (props) => {
  const [, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item, monitor) => {
        console.log(item, monitor)
    }
  }));

  return (
    <div ref={drop} className="bucket">
      <Task />
    </div>
  );
};

export default TaskBucket;
