import { RECEIVE_CATEGORIES, RECEIVE_NEW_CATEGORY, REMOVE_CATEGORY } from '../actions/category_actions';
import { RECEIVE_NEW_TASK, REMOVE_TASK, RECEIVE_TASK } from "../actions/task_actions";


const CategoriesReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);
    
    switch(action.type) {
    case RECEIVE_CATEGORIES:
        return action.categories;
    case RECEIVE_NEW_CATEGORY:
        newState[action.category.id] = action.category.data;
        return newState;
    case REMOVE_CATEGORY: 
        delete newState[action.catId]
        return newState;
    default:
        return state;
    }
};

export default CategoriesReducer;