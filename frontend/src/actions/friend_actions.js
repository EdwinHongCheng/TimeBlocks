import * as FriendApiUtil from "../util/friend_api_util";

export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";
export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";

// Action Creators
const receiveFriends = friends => {
    return {
        type: RECEIVE_FRIENDS,
        friends
    }
}

const receiveFriend = friend => {
    return {
        type: RECEIVE_FRIEND,
        friend
    }
}

const removeFriend = friendId => {
    return {
        type: REMOVE_FRIEND,
        friendId
    }
}

// [TEST] not sure what friend api util requests return 
// -> best guess (?)
// Thunk Action Creators
export const fetchFriends = () => dispatch => {
    return FriendApiUtil.getFriends()
        .then(friends => dispatch(receiveFriends(friends)))
}

export const fetchFriend = email => dispatch => {
    return TrackApiUtil.createFriend(email)
        .then(friend => dispatch(receiveFriend(friend)))
}

export const deleteFriend = friendId => dispatch => {
    return TrackApiUtil.deleteFriend(friendId)
        .then(() => dispatch(removeFriend(friendId)))
}
