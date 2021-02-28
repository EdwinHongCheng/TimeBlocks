import * as FriendApiUtil from "../util/friend_api_util";

export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";
export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";

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

// [TEST][ALL WORK] Thunk Action Creators 
export const fetchFriends = () => dispatch => {
    return FriendApiUtil.getFriends()
        .then(data => dispatch(receiveFriends(data.data)))
        .catch(err => console.log(err))
}

export const newFriend = email => dispatch => {
    return FriendApiUtil.createFriend(email)
        .then(data => dispatch(receiveFriend(data.data)))
        .catch(err => console.log(err))
}

export const destroyFriend = friendId => dispatch => {
    return FriendApiUtil.deleteFriend(friendId)
        .then(() => dispatch(removeFriend(friendId.userId)))
        .catch(err => console.log(err))
}
