import { combineReducers } from "redux";

import SessionErrorsReducer from "./session_errors_reducer";
// [TEST]
import FriendErrorsReducer from "./friend_errors_reducer";

const errorsReducer = combineReducers({
  session: SessionErrorsReducer,
  friend: FriendErrorsReducer 
});

export default errorsReducer;
