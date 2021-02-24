import { connect } from "react-redux";
import { login, receiveErrors } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    // [WORKS] clear errors when going back (w componentWillUnmount)
    clearErrors: () => dispatch(receiveErrors({}))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
