import { connect } from "react-redux"
import TaskBucket from "./task_bucket"

const mapStateToProps = state => {
    return {
        currentUser: state.session.user
    }
}

export default connect(mapStateToProps)(TaskBucket)