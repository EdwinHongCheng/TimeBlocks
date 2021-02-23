import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

import FirstButtons from "./first_buttons";

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(FirstButtons);
