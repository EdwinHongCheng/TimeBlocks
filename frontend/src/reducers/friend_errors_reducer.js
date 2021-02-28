import { RECEIVE_FRIEND_ERRORS, CLEAR_FRIEND_ERRORS } from "../actions/friend_actions";

const _nullErrors = [];

const FriendErrorsReducer = (prevState = _nullErrors, action) => {
    Object.freeze(prevState);

    switch (action.type) {
        case RECEIVE_FRIEND_ERRORS:
            let nextState = [];
            action.errors.forEach(error => {
                nextState.push(error)
            }) 
            return nextState;
        case CLEAR_FRIEND_ERRORS:
            return [];
        default:
            return prevState;
    }
};

export default FriendErrorsReducer;
