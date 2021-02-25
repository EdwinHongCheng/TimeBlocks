import { connect } from "react-redux";
import TaskCategories from "./task_categories";
import {fetchCategories, newCategory, destroyCategory} from "../../actions/category_actions"

const mapStateToProps = (state) => {
    return {
        categories: Object.values(state.categories.user),
        currentUser: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCategories: userId => dispatch(fetchCategories(userId))
        //need more actions?
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCategories);
