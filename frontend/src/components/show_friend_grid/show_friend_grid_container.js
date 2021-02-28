import { connect } from "react-redux"
import { fetchUserGrids } from "../../actions/grid_actions"

import ShowFriendGrid from "./show_friend_grid";

// [NOTE] copy of "grid_container.js" - may edit it, etc.
// - MUST Change - current user to friend (how?)
const mapStateToProps = (state, ownProps) => {
    return {
        currentFriend: ownProps.currentFriend,
        grids: state.grids
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserGrids: user => dispatch(fetchUserGrids(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowFriendGrid);
