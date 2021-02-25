import React from "react";
import { Link } from "react-router-dom";

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdown: false
        }

        this.logoutUser = this.logoutUser.bind(this);
        // [TEST] dropdown
        this.handleFriendsList = this.handleFriendsList.bind(this)
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
        return (<Link to={"/"}/>)
    }

    // [TEST] Dropdown
    handleFriendsList() {
        let newState = !this.state.dropdown;
        this.setState({ dropdown: newState });
    }

    render() {
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
                            <li>Hello There</li>
                            <li>General Kenobi!</li>
                            <li>Hello There</li>
                            <li>General Kenobi!</li>
                            <li>Hello There</li>
                            <li>General Kenobi!</li>
                            <li>Hello There</li>
                            <li>General Kenobi!</li>
                            <li>Hello There</li>
                            <li>General Kenobi!</li>
                        </ul>
                    </div>

                    <div className="profile-page-buttons">
                        <p className="clear-grid-button" 
                            onClick={() => console.log("Grid Cleared!")}
                        >
                            Clear Grid
                        </p>
                        <p className="logout-button" onClick={this.logoutUser}>
                            Log Out
                        </p>
                    </div>
                </div>

                <Link className="back-to-home-button" to="/home">Back</Link>
            </div>
        )
    }
}

export default ProfilePage;
