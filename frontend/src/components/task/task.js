import React, { useRef } from "react"
import { useDrag } from "react-dnd"

const Task = (props) => {
    const Task = useRef();
    
    const [, drag] = useDrag(() => ({
        item: {type: "TASK", color: props.color},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    const style = {
        backgroundColor: props.color
    }

    return (
        <div ref={drag}>
            <div ref={Task} style={style} className="task">
                {props.children}
            </div>
        </div>
    )
}

export default Task;