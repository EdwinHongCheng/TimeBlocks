import { getGrids, updateGrid, clearGrids } from "../util/grid_api_utils"

export const RECEIVE_USER_GRIDS = "RECEIVE_USER_GRIDS";
export const RECEIVE_USER_GRID = "RECEIVE_USER_GRID";
// [TEST] delete entire grid (Note: want to use clearGrids)
// - clearGrids - Grids plural refers to all Task Buckets on the grid
export const CLEAR_USER_GRID = "CLEAR_USER_GRID";

const receiveUserGrids = grids => {
    return {
        type: RECEIVE_USER_GRIDS,
        grids
    }
}

const receiveUserGrid = grid => {
    return {
        type: RECEIVE_USER_GRID,
        grid
    }
}

// [TEST] action creator for hard-deleting grid
const clearUserGrid = () => {
    return {
        type: CLEAR_USER_GRID
    }
}

export const fetchUserGrids = user => dispatch => {
    return getGrids(user)
        .then(grids => dispatch(receiveUserGrids(grids.data)))
}

export const updateUserGrid = (hour, data) => dispatch => {
    return updateGrid(hour, data)
        .then(res => dispatch(receiveUserGrid(res.data)))
};

// [TEST] delete entire grid (Note: want to use clearGrids)
export const destroyUserGrid = userId => dispatch => {
    return clearGrids(userId)
        .then(() => dispatch(clearUserGrid()))
}
