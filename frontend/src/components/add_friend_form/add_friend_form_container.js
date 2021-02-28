import { connect } from 'react-redux';
import { receiveErrors } from "../../actions/session_actions";
import AddFriendForm from "./add_friend_form";
// [TEST] add friend action
import { newFriend } from "../../actions/friend_actions";

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // [WORKS] clear errors when going back (w componentWillUnmount)
        clearErrors: () => dispatch(receiveErrors({})),
        newFriend: email => dispatch(newFriend(email))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendForm);
