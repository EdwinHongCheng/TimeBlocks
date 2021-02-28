import { connect } from "react-redux";
import TaskList from "./task_list";

const mapStateToProps = (state) => {
    return {
      grids: state.grids
    };
}

export default connect(mapStateToProps)(TaskList);
