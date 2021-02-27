import { connect } from "react-redux";
import { signup, receiveErrors } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.session.isAuthenticated,
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    // [WORKS] clear errors when going back (w componentWillUnmount)
    clearErrors: () => dispatch(receiveErrors({}))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
