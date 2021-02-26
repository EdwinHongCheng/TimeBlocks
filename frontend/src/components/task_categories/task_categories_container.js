import { connect } from "react-redux";
import TaskCategories from "./task_categories";
import {fetchCategories, newCategory, destroyCategory} from "../../actions/category_actions"

const mapStateToProps = (state) => {
    return {
        categories: Object.values(state.categories),
        currentUser: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCategories: userId => dispatch(fetchCategories(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCategories);
