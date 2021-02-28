import { connect } from "react-redux";
import ProfilePage from "./profile_page";
import { logout } from "../../actions/session_actions";
// [WORKS] clear user grid (hard delete)
import { destroyUserGrid } from "../../actions/grid_actions";
// [TEST] fetch Friends when visiting profile page
import { fetchFriends, clearFriends } from "../../actions/friend_actions";
// [TEST]
import { clearFriendErrors } from "../../actions/friend_actions";

const mapStateToProps = (state) => {
    return {
        currentUserId: state.session.user.id,
        friends: state.friends,
        currentUser: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        destroyUserGrid: userId => dispatch(destroyUserGrid(userId)),
        fetchFriends: () => dispatch(fetchFriends()),
        clearFriends: () => dispatch(clearFriends()),
        // [TEST] want to clear friend errors after any "action" user does
        clearFriendErrors: () => dispatch(clearFriendErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
