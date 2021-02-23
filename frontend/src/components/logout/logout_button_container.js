import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

import LogoutButton from "./logout_button";



const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated
});

export default connect(mapStateToProps, { logout })(LogoutButton);