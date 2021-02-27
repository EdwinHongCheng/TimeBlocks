import { getGrids, createGrid } from "../util/grid_api_utils"

export const RECEIVE_USER_GRIDS = "RECEIVE_USER_GRIDS";
export const RECEIVE_USER_GRID = "RECEIVE_USER_GRID";

const receiveUserGrids = grids => {
    return {
        type: RECEIVE_USER_GRIDS,
        grids
    }
}

export const fetchUserGrids = user => dispatch => {
    return getGrids(user)
        .then(grids => dispatch(receiveUserGrids(grids.data)))
}