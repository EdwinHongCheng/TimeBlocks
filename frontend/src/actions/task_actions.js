import {createTask, editTaskTitle, editTaskCategory, deleteTask} from "../util/task_api_util"


export const CREATE_TASK = "CREATE_TASK"

export const REMOVE_TASK = "REMOVE_TASK"

export const RECEIVE_TASK = 'RECEIVE_TASK';


export const NewTask = task => ({
    type: CREATE_TASK,
    task
})

export const removeTask = taskId => ({
    type: REMOVE_TASK,
    taskId
})

export const receiveTask = task => ({
    type: RECEIVE_TASK,
    task
}) 

//Create a task


//Delete a task


//Edit task title


//Edit task category