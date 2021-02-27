import axios from 'axios'

//Get all grids of a specific user
export const getGrids = userId => {
    return axios.get(`api/grids/allGrids/${userId}`);
}

//Create a grid
export const createGrid = data => {
    return axios.post(`/api/grids/`, data);
}

//Delete a grid
export const deleteGrid = gridId => {
    return axios.delete(`/api/grids/${gridId}`);
}

//Delete all grids by userId (Clear grids)
export const clearGrids = userId => {
    return axios.delete(`/api/grids/clearGrid/${userId}`);
}

//Update grid with new task
//data should be obj with taskID as key {taskId}
export const updateGrid = (hour, data) => { 
    return axios.put(`/api/grids/updateGridTask/${hour}`, data)
}