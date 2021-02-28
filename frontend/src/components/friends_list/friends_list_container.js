import { connect } from 'react-redux';
import FriendsList from "./friends_list";
import { destroyFriend } from "../../actions/friend_actions";
import { clearFriendErrors } from "../../actions/friend_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        friends: Object.values(ownProps.friends)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        destroyFriend: friendId => dispatch(destroyFriend(friendId)),
        // [TEST] want to clear friend errors after any "action" user does
        clearFriendErrors: () => dispatch(clearFriendErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
