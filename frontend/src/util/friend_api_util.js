import axios from 'axios';

//Get all friends of a specific user
// [WORKS] testing updated ver
export const getFriends = () => {
    return axios.get(`api/friends/get`)
}

//Create a friend
//email is an object {email: "example@gmail.com"}
// [TEST] testing updated ver
export const createFriend = email => {
    return axios.post(`/api/friends/`, email)
}

//Delete a friend
//friend id is an object {userId: "idstring"}
// [TEST] testing updated ver
export const deleteFriend = friendId => {
    return axios.delete(`/api/friends/delete`, friendId)
}

//Tested and working