import React from "react";
import Task from "../task/task";
import ShowFriendListItem from "./show_friend_list_item";

// [NOTE] edited copy of "task_list.js"
// - took out className="hide" (compared to task_list.js)
// - changed the "id" + "className"
const ShowFriendList = (props) => {
    return (

      <div id="friend-task-list-container">
        <div className="friend-task-list-title">
            <h1>Task Name</h1>
            <h1>Hour</h1>
        </div>
        <div className="friend-task-list-entries">
          {props.tasks.map((task, idx) => {
            return <ShowFriendListItem key={idx} task={task} />;
          })}
        </div>
      </div>
    );
}

export default ShowFriendList;
