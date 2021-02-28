import { 
    RECEIVE_FRIENDS, RECEIVE_FRIEND, REMOVE_FRIEND 
} from "../actions/friend_actions";

const FriendsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        // [WORKS]
        case RECEIVE_FRIENDS:
            return action.friends;
        // [WORKS]
        case RECEIVE_FRIEND:
            nextState[action.friend.id] = action.friend
            return nextState;

        // [STILL NEED TO TEST]
        case REMOVE_FRIEND:
            delete nextState[action.friendId]
            return nextState;
    
        default:
            return oldState;
    }
}

export default FriendsReducer;
