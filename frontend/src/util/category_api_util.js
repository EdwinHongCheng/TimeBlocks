import axios from 'axios'
 
//Get all categories of a specific user
export const getCategories = userId => {
    return axios.get(`api/categories/user/${userId}`)
}
 
//Create a category
export const createCategory = data => {
    return axios.post(`/api/categories/`, data)
}
 
//Delete a category
export const deleteCategory = catId => {
    return axios.delete(`/api/categories/${catId}`)
}

//TESTED. Works (test using: axios.method("url", {data key: "data value"}))