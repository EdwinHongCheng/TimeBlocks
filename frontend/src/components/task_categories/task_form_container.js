import { connect } from "react-redux";
import TaskForm from "./add_task_form";
import { newTask } from "../../actions/task_actions"

// const mapStateToProps = (state) => {
//     return {
//         currentUser: state.session.user
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        newTask: body => dispatch(newTask(body)),
    }
}

export default connect(null, mapDispatchToProps)(TaskForm);
