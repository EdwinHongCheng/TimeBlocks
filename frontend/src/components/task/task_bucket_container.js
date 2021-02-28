import { connect } from "react-redux"
import TaskBucket from "./task_bucket"

import { updateUserGrid } from "../../actions/grid_actions"

const mapStateToProps = state => {
    return {
        currentUser: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUserGrid: (hour, data) => dispatch(updateUserGrid(hour, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskBucket)