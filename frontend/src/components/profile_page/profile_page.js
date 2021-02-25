import React from "react";
import { Link } from "react-router-dom";

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdown: false,
            showConfirmClear: false 
        }

        this.logoutUser = this.logoutUser.bind(this);
        // [WORKS] dropdown
        this.handleFriendsList = this.handleFriendsList.bind(this)
        // [TEST] show Confirm Clear
        this.handleConfirmClear = this.handleConfirmClear.bind(this)
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
        return (<Link to={"/"}/>)
    }

    // [WORKS] Dropdown
    handleFriendsList() {
        let newState = !this.state.dropdown;
        this.setState({ dropdown: newState });
    }

    // [TEST] Show "Confirm Clear?" button
    handleConfirmClear() {
        let newState = !this.state.showConfirmClear;
        this.setState({ showConfirmClear: newState });
    }

    render() {
        // [WORKS] "Clear Grid/Confirm Clear?" Button
        let secondButton;
        if (!this.state.showConfirmClear) {
            secondButton = (
                <p className="clear-grid-button" 
                    onClick={this.handleConfirmClear}
                >Clear Grid</p>
            )
        } else if (this.state.showConfirmClear) {
            secondButton = (
                <p className="confirm-clear-button" 
                    onClick={ () => {console.log("Grid Cleared!"); this.handleConfirmClear()} }
                >Confirm Clear</p>
            )
        }

        // [TEST] "Log Out/Go Back" Button (turns to "Go Back") if we don't want to Clear Grid
        let thirdButton;
        if (!this.state.showConfirmClear) {
            thirdButton = (
                <p className="logout-button" onClick={this.logoutUser}>
                    Log Out
                </p>
            )
        } else if (this.state.showConfirmClear) {
            thirdButton = (
                <p className="dont-clear-button" 
                    onClick={ () => {this.handleConfirmClear()} }
                >Don't Clear</p>
            )
        }



        return (
            <div className="profile-page-background">

                <div className="profile-header-parent">
                    <p className="profile-header">User Profile</p>
                </div>

                <div className="prof-page-body">
                    <p className="user-name">John Wick</p>

                    <div className="friends-dropdown-parent">
                        <p className="friends-dropdown-title"
                            onClick={this.handleFriendsList}>
                                Friends List
                        </p>
                        <ul className={`friends-dropdown-${this.state.dropdown}`} >
                            <li>Bobby Fischer</li>
                            <li>Magnus Carlsen</li>
                            <li>Leffen</li>
                            <li>Mang0</li>
                            <li>Zain</li>
                            <li>Garry Kasparov</li>
                            <li>Jose Capablanca</li>
                            <li>Hikaru Nakamura</li>
                            <li>Fabiano Caruana</li>
                        </ul>
                    </div>

                    <div className="profile-page-buttons">
                        {secondButton}
                        {thirdButton}
                    </div>
                </div>

                <Link className="back-to-home-button" to="/home">Back</Link>
            </div>
        )
    }
}

export default ProfilePage;
