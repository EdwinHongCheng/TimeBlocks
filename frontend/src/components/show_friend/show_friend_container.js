import { connect } from 'react-redux';
import ShowFriend from "./show_friend";
import { fetchFriends } from "../../actions/friend_actions";

const mapStateToProps =  (state, ownProps) => {
    return {
        // [WORKS] for a specific Friend's Show Page
        currentFriend: state.friends[ownProps.match.params.friendId],
        history: ownProps.history
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // [WORKS] need to allow refreshing on "show_friend.js" to work
        fetchFriends: () => dispatch(fetchFriends()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowFriend);
