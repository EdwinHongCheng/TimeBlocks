import {RECEIVE_CATEGORIES, RECEIVE_NEW_CATEGORY, REMOVE_CATEGORY} from '../actions/category_actions'
    let preloadedState =  { user: [], new: undefined }
    const CategoriesReducer = (state = preloadedState, action) => {
        Object.freeze(state);
        let newState = Object.assign({}, state);
        switch(action.type) {
        case RECEIVE_CATEGORIES:
            newState.user = action.categories.data;
            return newState;
        case RECEIVE_NEW_CATEGORY:
            newState.new = action.category.data;
            return newState;
        case REMOVE_CATEGORY: 
            delete newState[action.catId]
            return newState;
        default:
            return state;
        }
    };
  
  export default CategoriesReducer;