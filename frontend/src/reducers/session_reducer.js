import { RECEIVE_USER_LOGOUT } from "../actions/session_actions"

const initialState = {
    isAuthenticated: false,
    user: {}
}

const sessionReducer = (prevState=initialState, action) => {
    Object.freeze(prevState)

    switch(action.type) {
        case RECEIVE_USER_LOGOUT:
            return {
                isAuthenticated: false,
                user: undefined
            }
        default:
            return prevState;
    }
}

export default sessionReducer;