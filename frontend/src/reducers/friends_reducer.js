import { 
    RECEIVE_FRIENDS, RECEIVE_FRIEND, REMOVE_FRIEND, CLEAR_FRIENDS
} from "../actions/friend_actions";

const FriendsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_FRIENDS:
            return action.friends;
        case RECEIVE_FRIEND:
            nextState[action.friend.id] = action.friend
            return nextState;
        case REMOVE_FRIEND:
            delete nextState[action.friendId]
            return nextState;
        case CLEAR_FRIENDS:
            return {};
        default:
            return oldState;
    }
}

export default FriendsReducer;
