import axios from 'axios';

//Get all friends of a specific user
export const getFriends = () => {
    return axios.get(`api/friends/get`)
}

//Create a friend
export const createFriend = friendEmail => {
    return axios.post(`/api/friends/`, friendEmail)
}

//Delete a friend
export const deleteFriend = friendId => {
    return axios.delete(`/api/friends/${friendId}`)
}
