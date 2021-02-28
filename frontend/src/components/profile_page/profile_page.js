import React from "react";
import { Link } from "react-router-dom";
import AddFriendFormContainer from "../add_friend_form/add_friend_form_container";
// [TEST] Friends List
import FriendsListContainer from "../friends_list/friends_list_container";

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showConfirmClear: false 
        }

        this.logoutUser = this.logoutUser.bind(this);
        // [WORKS] show Confirm Clear
        this.handleConfirmClear = this.handleConfirmClear.bind(this)
        // [TEST] hard-delete grid
        this.hardDeleteGrid = this.hardDeleteGrid.bind(this)
    }

    componentDidMount() {
        this.props.fetchFriends()
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.clearFriends();
        this.props.logout();
        return (<Link to={"/"}/>)
    }

    // [WORKS] Toggles "Confirm Clear" + "Don't Clear" buttons
    handleConfirmClear() {
        // adding clearFriendErrors -> want to clear after every user "action"
        this.props.clearFriendErrors();
        let newState = !this.state.showConfirmClear;
        this.setState({ showConfirmClear: newState });
    }

    // [TEST] clear grid (hard-delete)
    hardDeleteGrid() {
        this.props.destroyUserGrid(this.props.currentUserId);
        this.handleConfirmClear();
    }

    render() {
        // [WORKS] "Clear Grid/Don't Clear" Button
        let secondButton;
        if (!this.state.showConfirmClear) {
            secondButton = (
                <>
                    <p className="clear-grid-button" 
                        onClick={this.handleConfirmClear}
                    >Clear Grid</p>
                </>
            )
        } else if (this.state.showConfirmClear) {
            secondButton = (
                <>
                    <p className="confirm-clear-button" 
                        onClick={ () => {this.hardDeleteGrid()} }
                    >Confirm Clear</p>

                    <p className="dont-clear-button" 
                        onClick={ () => {this.handleConfirmClear()} }
                    >Don't Clear</p>
                </>
            )
        }

        let thirdButton = (
            <p className="logout-button" onClick={this.logoutUser}>
                Log Out
            </p>
        )

        return (
            <div className="profile-page-background">

                <div className="profile-header-parent">
                    <p className="profile-header">Your Profile Page</p>
                    <p className="straightline"></p>
                </div>

                <div className="profile-page-body">

                    <div className="prof-page-left">
                        <div className="friends-dropdown-parent">
                            <p className="friends-dropdown-title"
                            >Friends List</p>
                            <ul className={`friends-dropdown-true`} >
                                <FriendsListContainer friends={this.props.friends}/>
                            </ul>
                        </div>
                        <AddFriendFormContainer />
                    </div>

                    <div className="prof-page-right">
                        <p className="user-name">John Wick</p>

                        <div className="profile-page-buttons">
                            {thirdButton}
                            {secondButton}
                            <Link className="back-to-home-button" to="/home">Back</Link>
                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default ProfilePage;
