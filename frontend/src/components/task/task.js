import React, { useRef } from "react"
import { useDrag } from "react-dnd"

const Task = (props) => {
    const Task = useRef();
    
    const [{isDragging} , drag] = useDrag(() => ({
        item: {type: "TASK", color: props.color},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    const style = {
        backgroundColor: props.color
    }

    if (isDragging) {
            const taskCategoriesContainer = document.getElementById(
              "task-categories-container"
            ).classList;

            if (taskCategoriesContainer.contains("show")) {
              taskCategoriesContainer.remove("show");
              taskCategoriesContainer.add("hide");
            }
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