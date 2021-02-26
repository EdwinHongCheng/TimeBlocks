import { connect } from 'react-redux';
import { receiveErrors } from "../../actions/session_actions";
import AddFriendForm from "./add_friend_form";

const mapStateToProps = (state) => {
    return {
        // [WIP]
        errors: state.errors.session,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // [WIP]
        // [WORKS] clear errors when going back (w componentWillUnmount)
        clearErrors: () => dispatch(receiveErrors({}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendForm);
