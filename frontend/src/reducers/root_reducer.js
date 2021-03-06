import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import categories from "./categories_reducer";
import grids from "./grid_reducer";
import friends from "./friends_reducer";

const rootReducer = combineReducers({
    session,
    errors,
    categories,
    grids,
    friends
});

export default rootReducer;