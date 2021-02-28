import * as FriendApiUtil from "../util/friend_api_util";

export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";
export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";
export const CLEAR_FRIENDS = "CLEAR_FRIENDS"
// [TEST]
export const RECEIVE_FRIEND_ERRORS = "RECEIVE_FRIEND_ERRORS"
export const CLEAR_FRIEND_ERRORS = "CLEAR_FRIEND_ERRORS"

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


// [TEST] made this action (advice from Bryce)
export const receiveFriendErrors = (errors) => {
  return {
    type: RECEIVE_FRIEND_ERRORS,
    errors: [errors]
  };
};
// [TEST]
export const clearFriendErrors = () => {
  return {
    type: CLEAR_FRIEND_ERRORS
  };
};

// [NOTE] use to clear session of friends once logged out 
// just to prevent friends from rendering on another unrelated account
// - doesn't hard delete anything from the DB, etc.
export const clearFriends = () => {
    return {
        type: CLEAR_FRIENDS
    }
}

// [TEST][ALL WORK] Thunk Action Creators 
export const fetchFriends = () => dispatch => {
    return FriendApiUtil.getFriends()
        .then(data => dispatch(receiveFriends(data.data)))
        .catch(err => console.log(err))
}

// [WORKS] Bryce ver
export const newFriend = email => dispatch => {
    return FriendApiUtil.createFriend(email)
        .then(data => {
            if (!data.data.error) {
                dispatch(receiveFriend(data.data))
            } else {
                dispatch(receiveFriendErrors(data.data.error))
            }
        })
}

export const destroyFriend = friendId => dispatch => {
    return FriendApiUtil.deleteFriend(friendId)
        .then(() => dispatch(removeFriend(friendId.userId)))
        .catch(err => console.log(err))
}
