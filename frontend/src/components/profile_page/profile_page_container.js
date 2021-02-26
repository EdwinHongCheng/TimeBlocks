import { connect } from "react-redux";
import ProfilePage from "./profile_page";
import { logout } from "../../actions/session_actions";

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, {logout})(ProfilePage);
