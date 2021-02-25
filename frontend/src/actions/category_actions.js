import {getCategories, createCategory, deleteCategory} from '../util/category_api_util'

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES"

export const RECEIVE_NEW_CATEGORY = "RECEIVE_NEW_CATEGORY"

export const REMOVE_CATEGORY = "REMOVE_POST"

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

export const fetchCategories = userId => dispatch => (
    getCategories(userId)
        .then(categories => dispatch(receiveCategories(categories)))
        .catch(err => console.log(err))
)

export const newCategory = data => dispatch => (
    createCategory(data)
        .then(category => dispatch(receiveNewCategory(category)))
        .catch(err => console.log(err))
)

export const destroyCategory = catId => dispatch => (
    deleteCategory(catId)
        .then(() => dispatch (removeCategory(catId)))
        .catch(err => console.log(err))
)