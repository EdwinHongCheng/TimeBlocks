import { connect } from 'react-redux';
import AddFriendForm from "./add_friend_form";
// [TEST] add friend action
import { newFriend, clearFriendErrors } from "../../actions/friend_actions";

const mapStateToProps = (state) => {
    return {
        errors: state.errors.friend,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        newFriend: email => dispatch(newFriend(email)),
        clearFriendErrors: () => dispatch(clearFriendErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendForm);
