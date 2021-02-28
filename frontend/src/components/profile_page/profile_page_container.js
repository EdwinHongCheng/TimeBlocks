import { connect } from "react-redux";
import ProfilePage from "./profile_page";
import { logout } from "../../actions/session_actions";
// [TEST] clear user grid (hard delete)
import { destroyUserGrid } from "../../actions/grid_actions";

const mapStateToProps = (state) => {
    return {
        currentUserId: state.session.user.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        // [TEST]
        destroyUserGrid: userId => dispatch(destroyUserGrid(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
