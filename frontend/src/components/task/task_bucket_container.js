import { connect } from "react-redux"
import TaskBucket from "./task_bucket"

import { updateUserGrid } from "../../actions/grid_actions"

const mapDispatchToProps = dispatch => {
    return {
        updateUserGrid: (hour, data) => dispatch(updateUserGrid(hour, data))
    }
}

export default connect(null, mapDispatchToProps)(TaskBucket)