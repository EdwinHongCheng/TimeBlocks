import { RECEIVE_CATEGORIES, RECEIVE_NEW_CATEGORY, REMOVE_CATEGORY } from '../actions/category_actions';
import { UPDATE_CATEGORY} from "../actions/task_actions";


const CategoriesReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);
    
    switch(action.type) {
        case RECEIVE_CATEGORIES:
            return action.categories;
        case RECEIVE_NEW_CATEGORY:
            newState[action.category._id] = action.category;
            return newState;
        case REMOVE_CATEGORY: 
            delete newState[action.catId];
            return newState;
        case UPDATE_CATEGORY:
            return Object.assign(newState, { [action.category._id]: action.category});
        default:
            return state;
    }
};

export default CategoriesReducer;