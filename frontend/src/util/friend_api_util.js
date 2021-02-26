import axios from 'axios';

//Get all friends of a specific user
export const getFriends = () => {
    return axios.get(`api/friends/get`)
}

//Create a friend
//email is an object {email: "example@gmail.com"}
export const createFriend = email => {
    return axios.post(`/api/friends/`, email)
}

//Delete a friend
//friend id is an object {userId: "idstring"}
export const deleteFriend = friendId => {
    return axios.delete(`/api/friends/delete`, friendId)
}

//Tested and working