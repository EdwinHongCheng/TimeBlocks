import {getCategories, createCategory, deleteCategory} from '../util/category_api_util'

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES"

export const RECEIVE_NEW_CATEGORY = "RECEIVE_NEW_CATEGORY"

export const REMOVE_CATEGORY = "REMOVE_CATEGORY"

///////Action creators///////

export const receiveCategories = categories => ({
    type: RECEIVE_CATEGORIES,
    categories
}) 

export const receiveNewCategory = category => ({
    type: RECEIVE_NEW_CATEGORY,
    category
})

export const removeCategory = catId => ({
    type: REMOVE_CATEGORY,
    catId
})

////Thunk/////

//Get all categories of a specific user
export const fetchCategories = userId => dispatch => {
    return getCategories(userId)
        .then(categories => dispatch(receiveCategories(categories.data)))
        .catch(err => console.log(err))
}
   
//Create a category
export const newCategory = data => dispatch => (
    createCategory(data)
        .then(category => dispatch(receiveNewCategory(category)))
        .catch(err => console.log(err))
)

//Delete a category
export const destroyCategory = catId => dispatch => (
    deleteCategory(catId)
        .then(() => dispatch (removeCategory(catId)))
        .catch(err => console.log(err))
)

