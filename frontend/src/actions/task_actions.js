import {createTask, editTaskTitle, editTaskCategory, deleteTask} from "../util/task_api_util"


export const RECEIVE_NEW_TASK = "RECEIVE_NEW_TASK"

export const REMOVE_TASK = "REMOVE_TASK"

export const RECEIVE_TASK = 'RECEIVE_TASK';


export const receiveNewTask = task => ({
    type: RECEIVE_NEW_TASK,
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
export const newTask = data => dispatch => (
    createTask(data)
        .then(task => dispatch(receiveNewTask(task)))
        .catch(err => console.log(err))
)

//Delete a task
export const destroyTask = taskId => dispatch => (
    deleteTask(taskId)
        .then(() => dispatch (removeTask(taskId)))
        .catch(err => console.log(err))
)

//Edit task title
export const updateTaskTitle = (taskId, data) => dispatch => (
    editTaskTitle(taskId, data)
        .then(() => dispatch(receiveTask(taskId)))
        .catch(err => console.log(err))
)


//Edit task category
export const updateTaskCategory = (taskId, data) => dispatch => (
    editTaskCatgeory(taskId, data)
        .then(task => dispatch(receiveNewTask(task)))
        .catch(err => console.log(err))
)