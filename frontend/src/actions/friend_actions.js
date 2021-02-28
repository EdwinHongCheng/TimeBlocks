import * as FriendApiUtil from "../util/friend_api_util";

export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";
export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";

// [TEST] Action Creators
const receiveFriends = friends => {
    return {
        type: RECEIVE_FRIENDS,
        friends
    }
}

const receiveFriend = friends => {
    return {
        type: RECEIVE_FRIEND,
        friends
    }
}

const removeFriend = friends => {
    return {
        type: REMOVE_FRIEND,
        friends
    }
}

// [TEST] not sure what friend api util requests return 
// -> best guess (?)
// [TEST] Thunk Action Creators
export const fetchFriends = () => dispatch => {
    return FriendApiUtil.getFriends()
        .then(friends => dispatch(receiveFriends(friends.data)))
        .catch(err => console.log(err))
}

export const fetchFriend = email => dispatch => {
    return FriendApiUtil.createFriend(email)
        .then(friends => dispatch(receiveFriend(friends.data)))
        .catch(err => console.log(err))
}

// [NOT WORKING YET - MUST FIX slice of state]
// 
export const destroyFriend = friendId => dispatch => {
    return FriendApiUtil.deleteFriend(friendId)
        .then(() => dispatch(removeFriend(friendId)))
        .catch(err => console.log(err))
}
