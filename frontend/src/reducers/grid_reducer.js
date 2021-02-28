import { RECEIVE_USER_GRIDS, RECEIVE_USER_GRID, CLEAR_USER_GRID } from "../actions/grid_actions";


const gridReducer = (prevState = {}, action) => {
  Object.freeze(prevState);

    switch(action.type) {
        case RECEIVE_USER_GRIDS:
            return Object.assign({}, action.grids)
        case RECEIVE_USER_GRID:
            return Object.assign({}, prevState, action.grid)
        // [TEST] CLEAR_USER_GRID
        case CLEAR_USER_GRID:
            return prevState;
        default:
            return prevState;
    }
}

export default gridReducer;
