import { bindActionCreators } from "redux";
import { RECEIVE_USER_GRIDS, RECEIVE_USER_GRID } from "../actions/grid_actions"

const gridReducer = (prevState={}, action) => {
    Object.freeze(prevState)

    switch(action.type) {
        case RECEIVE_USER_GRIDS:
            return Object.assign({}, prevState, action.grids)
        case RECEIVE_USER_GRID:
            return Object.assign({}, prevState, action.grid)
        default:
            return prevState;
    }
}

export default gridReducer;