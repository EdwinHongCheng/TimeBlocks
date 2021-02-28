import { connect } from "react-redux";
import ShowFriendList from "./show_friend_list";

const mapStateToProps = (state) => {
    return {
      grids: state.grids
    };
}

export default connect(mapStateToProps)(ShowFriendList);