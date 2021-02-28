import React from "react";

import ShowFriendListItem from "./show_friend_list_item";

// [NOTE] edited copy of "task_list.js"
// - took out className="hide" (compared to task_list.js)
// - changed the "id" + "className"
const ShowFriendList = (props) => {

  let grids = []

  for(let grid in props.grids) {
    let gridItem = {
      color: props.grids[grid].color,
      title: props.grids[grid].title,
      hour: grid
    }
    grids.push(gridItem)
  }

  return (
    <div id="friend-task-list-container">
      <div className="friend-task-list-title">
          <h1>Friend's Tasks</h1>
      </div>
      <div className="friend-task-list-entries">
      {grids.map((gridItem, idx) => {
        return <ShowFriendListItem key={idx} task={gridItem} />;
      })}
      </div>
    </div>
  );
}

export default ShowFriendList;
