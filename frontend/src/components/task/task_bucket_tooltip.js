import React from "react";

const TaskBucketTooltip = props => {

    if (props.message != "") {
        return (
            <span className="tooltip">{props.message}</span>
        );
    } else {
        return (
            null
        )
    }
}

export default TaskBucketTooltip;