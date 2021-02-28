import { 
    RECEIVE_FRIENDS, RECEIVE_FRIEND, REMOVE_FRIEND 
} from "../actions/friend_actions";

const FriendsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_FRIENDS:
            return action.friends;
        
        // [JANKY BUT WORKS FOR NOW (edwin)]
        case RECEIVE_FRIEND:
            // [NOTE] as of now, action.friend = object of all current friends
            return action.friends;

        // [STILL NEED TO TEST]
        case REMOVE_FRIEND:
            delete nextState[action.friendId]
            return nextState;
    
        default:
            return oldState;
    }
}

export default FriendsReducer;
