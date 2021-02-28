import { connect } from 'react-redux';
import FriendsList from "./friends_list";
import { destroyFriend } from "../../actions/friend_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        friends: Object.values(ownProps.friends)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        destroyFriend: friendId => dispatch(destroyFriend(friendId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
