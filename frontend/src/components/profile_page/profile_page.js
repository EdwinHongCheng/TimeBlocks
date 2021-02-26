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
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
        return (<Link to={"/"}/>)
    }

    // [WORKS] Toggles "Confirm Clear" + "Don't Clear" buttons
    handleConfirmClear() {
        let newState = !this.state.showConfirmClear;
        this.setState({ showConfirmClear: newState });
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
                        onClick={ () => {console.log("Grid Cleared!"); this.handleConfirmClear()} }
                    >Confirm Clear !!!</p>

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
                                <FriendsListContainer />
                                <li>Bobby Fischer</li>
                                <li>Magnus Carlsen</li>
                                <li>Leffen</li>
                                <li>mang0</li>
                                <li>Zain</li>
                                <li>Garry Kasparov</li>
                                <li>Jose Raul Capablanca</li>
                                <li>Hikaru Nakamura</li>
                                <li>Fabiano Caruana</li>
                                <li>Judit Polgar</li>
                                <li>Mew2King</li>
                            </ul>
                        </div>
                        {/* [WIP] Add Friend Form */}
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
