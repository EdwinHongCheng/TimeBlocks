import axios from 'axios';

//Get all friends of a specific user
// [WORKS]
export const getFriends = () => {
    return axios.get(`api/friends/get`)
}

//Create a friend
//email is an object {email: "example@gmail.com"}
// [WORKS]
export const createFriend = email => {
    return axios.post(`/api/friends/`, email)
}

//Delete a friend
//friend id is an object {userId: "idstring"}
// [WORKS] 
// [NOTE] MUST write object with key = userId (NOT id)
export const deleteFriend = friendId => {
    return axios.delete(`/api/friends/delete`, {data: friendId})
}

//Tested and working