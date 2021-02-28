import React from "react"

const ShowFriendListItem = (props) => {
    let style = {
        backgroundColor: props.task.color
    }

    return(
        <div className="task-list-item">
            <div style={style} className="task-list-color">
                <h1>{props.task.hour}</h1>
            </div>
            <h1>{props.task.title}</h1>
        </div>
    )
}

export default ShowFriendListItem;
