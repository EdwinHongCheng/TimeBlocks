import { connect } from "react-redux";
import ProfilePage from "./profile_page";
import { logout } from "../../actions/session_actions";
// [WORKS] clear user grid (hard delete)
import { destroyUserGrid } from "../../actions/grid_actions";
// [TEST] fetch Friends when visiting profile page
import { fetchFriends } from "../../actions/friend_actions";

const mapStateToProps = (state) => {
    return {
        currentUserId: state.session.user.id,
        friends: state.friends
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        // [WORKS]
        destroyUserGrid: userId => dispatch(destroyUserGrid(userId)),
        // [TEST]
        fetchFriends: () => dispatch(fetchFriends())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
