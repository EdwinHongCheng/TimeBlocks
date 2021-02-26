import { connect } from "react-redux"
import { fetchUserGrids } from "../../actions/grid_actions"

import Grid from "./grid"

const mapStateToProps = state => {
    return {
        currentUser: state.session.user,
        grids: state.grids
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserGrids: user => dispatch(fetchUserGrids(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid)