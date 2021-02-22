import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
} from "../actions/session_actions";

const _nullErrors = [];

const SessionErrorsReducer = (prevState=_nullErrors, action) => {
  Object.freeze(prevState);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    default:
      return prevState;
  }
};

export default SessionErrorsReducer;