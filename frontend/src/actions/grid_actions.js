import { getGrids, updateGrid } from "../util/grid_api_utils"

export const RECEIVE_USER_GRIDS = "RECEIVE_USER_GRIDS";
export const RECEIVE_USER_GRID = "RECEIVE_USER_GRID";

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

export const fetchUserGrids = user => dispatch => {
    return getGrids(user)
        .then(grids => dispatch(receiveUserGrids(grids.data)))
}

export const updateUserGrid = (hour, data) => dispatch => {
    return updateGrid(hour, data)
        .then(res => dispatch(receiveUserGrid(res.data)))
};
