import axios from 'axios';

//Create task
export const createTask = data => {
    return axios.post('api/tasks/', data)
}

//Edit task title
export const editTaskTitle = (taskId, data) => {
    return axios.put(`/api/tasks/editTitle/${taskId}`, data)
}

//Edit task category
export const editTaskCategory = (taskId, data) => {
    return axios.post(`/api/tasks/updateCategory/${taskId}`, data)
}

//Delete task
export const deleteTask = taskId => {
    return axios.delete(`/api/tasks/${taskId}`)
}

//TESTED. Works.