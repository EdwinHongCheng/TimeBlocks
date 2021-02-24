import React from "react"
import { useDrag } from "react-dnd"

const Task = (props) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        item: {type: "TASK"},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return (
        <div ref={drag} className="task">

        </div>
    )
}

export default Task;