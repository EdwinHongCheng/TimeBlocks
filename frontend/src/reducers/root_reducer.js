import { combineReducers } from "redux"
import session from "./session_reducer"
import errors from "./errors_reducer"
import categories from "./categories_reducer"

const rootReducer = combineReducers({
    session,
    errors,
    categories
})

export default rootReducer;