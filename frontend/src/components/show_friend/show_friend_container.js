import { connect } from 'react-redux';
import ShowFriend from "./show_friend";

const mapStateToProps =  (state, ownProps) => {

    debugger

    return {
        // [WIP] for a specific Friend's Show Page
        currentFriend: state.friends[ownProps.match.params.friendId],
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // [WIP]
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowFriend);
