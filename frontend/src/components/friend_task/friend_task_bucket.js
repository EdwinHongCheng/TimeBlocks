import React, { useState, useEffect } from "react";

import { useDrop } from "react-dnd";

const FriendTaskBucket = (props) => {
  const [color, setColor] = useState(props.color);

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
    },
  }));

  useEffect(() => {
    setColor(props.color)
  }, [props.color])

  let style = {
      backgroundColor: color
  }

  return (
    <div ref={drop} className="friend-bucket">
      <div className="friend-bucket-background" style={style}>
          <div className="friend-task-time">
            <h1>{props.time}</h1>
          </div>
      </div>
    </div>
  );
};

export default FriendTaskBucket;
