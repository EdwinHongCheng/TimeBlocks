import { combineReducers } from "redux"
import session from "./session_reducer"
import errors from "./errors_reducer"
import categories from "./categories_reducer"
import tasks from "./tasks_reducer"

const rootReducer = combineReducers({
    session,
    errors,
    categories,
    tasks
})

export default rootReducer;