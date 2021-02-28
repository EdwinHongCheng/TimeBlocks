import { connect } from "react-redux";
import TaskCategories from "./task_categories";
import {fetchCategories, newCategory, destroyCategory} from "../../actions/category_actions"
import {destroyTask} from '../../actions/task_actions';

const mapStateToProps = (state) => {
    return {
        categories: Object.values(state.categories),
        currentUser: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCategories: userId => dispatch(fetchCategories(userId)),
        destroyCategory: catId => dispatch(destroyCategory(catId)),
        destroyTask: taskId => dispatch(destroyTask(taskId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCategories);

