import { combineReducers } from "redux";

import sessionErrors from "./errors/session_errors_reducer";

export default combineReducers({
  sessionErrors,
});
