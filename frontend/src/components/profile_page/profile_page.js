import React from "react";
import { Link } from "react-router-dom";

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showConfirmClear: false 
        }

        this.logoutUser = this.logoutUser.bind(this);
        // [WORKS] dropdown
        // this.handleFriendsList = this.handleFriendsList.bind(this)
        // [WORKS] show Confirm Clear
        this.handleConfirmClear = this.handleConfirmClear.bind(this)
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
        return (<Link to={"/"}/>)
    }

    // [WORKS] Dropdown
    // handleFriendsList() {
    //     let newState = !this.state.dropdown;
    //     this.setState({ dropdown: newState });
    // }

    // [WORKS] Toggles "Confirm Clear" + "Don't Clear" buttons
    handleConfirmClear() {
        let newState = !this.state.showConfirmClear;
        this.setState({ showConfirmClear: newState });
    }

    render() {
        // [WORKS] "Clear Grid/Confirm Clear" Button
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
                </div>

                <div className="profile-page-body">
                    <div className="friends-dropdown-parent">
                        <p className="friends-dropdown-title"
                            // onClick={this.handleFriendsList}
                        >Friends List</p>
                        <ul className={`friends-dropdown-true`} >
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
