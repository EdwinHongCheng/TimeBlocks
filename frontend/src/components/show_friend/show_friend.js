import React from 'react';
import { Link } from 'react-router-dom';
// [WORKS] copied + Grid + Task List (removed className="hide" for Task List)
import ShowFriendGridContainer from "../show_friend_grid/show_friend_grid_container";
import ShowFriendListContainer from "../show_friend_list/show_friend_list_container";

// [CURRENT GOAL] do CSS on Show Friend page Components, etc.

class ShowFriend extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showGridOverList: true
        }

        this.handleShowGridOverList = this.handleShowGridOverList.bind(this)
    }

    // [WORKS] Tap -> switches between Friend's Grid + Friend's Task List
    handleShowGridOverList() {
        let newState = !this.state.showGridOverList;
        this.setState({ showGridOverList: newState });
    }

    render() {

        let showGridOrList;
        if (this.state.showGridOverList) {
            showGridOrList = (
                <div onClick={this.handleShowGridOverList}>
                    <ShowFriendGridContainer/>
                </div>
            );
        } else {
            showGridOrList = (
                <div onClick={this.handleShowGridOverList}>
                    <ShowFriendListContainer />
                </div>
            );
        }

        let tapAdvice;
        if (this.state.showGridOverList) {
            tapAdvice = (
                <p className="tap-advice" 
                    onClick={this.handleShowGridOverList}
                >Tap Time Grid to view Task List!</p>
            )
        } else {
            tapAdvice = (
                <p className="tap-advice"
                    onClick={this.handleShowGridOverList}
                >Tap Task List to view Time Grid!</p>
            )
        }

        return (
            <div className="show-friend-all">

                <p className="friend-show-header"
                >Hermione Granger's Profile Page</p>
                <p className="friend-show-straightline"></p>

                <Link className="show-friend-back-button" to="/profile-page">
                    Back to Your Profile Page
                </Link>

                {tapAdvice}
                {showGridOrList}
            </div>
        );
    }
}

export default ShowFriend;
