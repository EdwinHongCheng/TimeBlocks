import { connect } from 'react-redux';
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendForm);
