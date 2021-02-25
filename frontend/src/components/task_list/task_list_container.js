import { connect } from "react-redux";
import TaskList from "./task_list";

const mapStateToProps = (state) => {
    return {
        tasks: ["sdcfgvhbjn", "asdfasdfasd"]
    }
}

export default connect(mapStateToProps)(TaskList);
