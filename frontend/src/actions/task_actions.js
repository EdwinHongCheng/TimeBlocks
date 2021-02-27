import {createTask, editTaskTitle, editTaskCategory, deleteTask} from "../util/task_api_util"

export const UPDATE_CATEGORY = "UPDATE_CATEGORY";

export const RECEIVE_TASK = 'RECEIVE_TASK';

const updateCategory = category => ({
    type: UPDATE_CATEGORY,
    category
})

export const receiveTask = taskId => ({
    type: RECEIVE_TASK,
    taskId
}) 

//Create a task
export const newTask = data => dispatch => (
    createTask(data)
        .then(category => dispatch(updateCategory(category)))
        .catch(err => console.log(err))
)

//Delete a task
export const destroyTask = taskId => dispatch => (
    deleteTask(taskId)
        .then((category) => dispatch (updateCategory(category)))
        .catch(err => console.log(err))
)

//Edit task title
export const updateTaskTitle = (taskId, data) => dispatch => (
    editTaskTitle(taskId, data)
        .then(id => dispatch(receiveTask(id.taskId)))
        .catch(err => console.log(err))
)

// //Edit task category
export const updateTaskCategory = (taskId, data) => dispatch => (
    editTaskCategory(taskId, data)
        .then(task => dispatch(receiveNewTask(task)))
        .catch(err => console.log(err))
)