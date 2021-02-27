import React from 'react';
import { Link } from 'react-router-dom';
// [TEST][WORKS] copied + Grid + Task List (removed className="hide" for Task List)
import ShowFriendGridContainer from "../show_friend_grid/show_friend_grid_container";
import ShowFriendListContainer from "../show_friend_list/show_friend_list_container";

// [CURRENT GOAL] do CSS on Show Friend page Components, etc.

class ShowFriend extends React.Component {
    render() {
        return (
            <div>
                <ShowFriendGridContainer />
                <ShowFriendListContainer />

                <div className="panel-buttons">
                    <Link className="prof-page-button" to="/profile-page">
                        Back to Your Profile Page
                    </Link>
                </div>
            </div>
        );
    }
}

export default ShowFriend;
