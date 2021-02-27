import React from "react";

import Task from "../task/task";
import ShowFriendListItem from "./show_friend_list_item";

const ShowFriendList = (props) => {
    return (
        // [NOTE] took out className="hide" (compared to task_list.js)
      <div id="task-list-container">
        <div className="task-list-title">
            <h1>Task Name</h1>
            <h1>Hour</h1>
        </div>
        <div className="task-list-entries">
          {props.tasks.map((task, idx) => {
            return <ShowFriendListItem key={idx} task={task} />;
          })}
        </div>
      </div>
    );
}

export default ShowFriendList;
