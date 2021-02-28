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

    componentWillMount() {
        this.props.fetchFriends();
    }

    // [WORKS] Tap -> switches between Friend's Grid + Friend's Task List
    handleShowGridOverList() {
        let newState = !this.state.showGridOverList;
        this.setState({ showGridOverList: newState });
    }

    render() {
        // [WORKS] can refresh on Friend's Show Page if you are friends with them
        // [ISSUE] if logged into another account:
        // -> tries to visit a friend's showpage you don't have access to
        // -> screen = white (returns null)

        let showGridOrList;
        if (this.state.showGridOverList) {
            showGridOrList = (
                <div onClick={this.handleShowGridOverList}>
                    <ShowFriendGridContainer currentFriend={this.props.currentFriend}/>
                </div>
            );
        } else {
            showGridOrList = (
                <div onClick={this.handleShowGridOverList}>
                    <ShowFriendListContainer currentFriend={this.props.currentFriend}/>
                </div>
            );
        }

        let tapAdvice;
        if (this.state.showGridOverList) {
            tapAdvice = (
                <p className="tap-advice" 
                >Tap Time Grid to view Task List!</p>
            )
        } else {
            tapAdvice = (
                <p className="tap-advice"
                >Tap Task List to view Time Grid!</p>
            )
        }

        if (!this.props.currentFriend) { 
            // this.props.history.push("/profile-page");
            return null;
        } else {
            return (
                <div className="show-friend-all">
    
                    <p className="friend-show-header"
                    >{this.props.currentFriend.name}'s Profile Page</p>
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
}

export default ShowFriend;
