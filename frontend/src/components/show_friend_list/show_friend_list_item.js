import React from "react"

const ShowFriendListItem = (props) => {
    return(
        <div className="task-list-item">
            <h1>{props.task.name}</h1>
            <h1>{props.task.hour}</h1>
        </div>
    )
}

export default ShowFriendListItem;
