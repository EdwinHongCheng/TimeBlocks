import { connect } from "react-redux";
import ShowFriendList from "./show_friend_list";

const mapStateToProps = (state) => {
    return {
      tasks: [
        {
          id: 1,
          name: "Brush Teeth",
          hour: 6,
        },
        {
          id: 2,
          name: "Do Laundry",
          hour: 7,
        },
        {
          id: 2,
          name: "Do Laundry",
          hour: 7,
        }],
    };
}

export default connect(mapStateToProps)(ShowFriendList);