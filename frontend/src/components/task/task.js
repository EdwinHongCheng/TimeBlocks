import React, { useEffect, useState } from "react"
import { useDrag } from "react-dnd"

const Task = (props) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        item: {type: "TASK", color: "#000000"},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    const Task = React.useRef()

    const [color, setColor] = useState("hotpink")

    if(isDragging) {
        console.log(Task)
        // drag.setAt
        Task.current.setAttribute("style", "background-color:black")
    }

    const style = {
        backgroundColor: color
    }

    return (
        <div ref={drag}  style={style}>
            <div ref={Task} className="task"></div>
        </div>
    )
}

export default Task;