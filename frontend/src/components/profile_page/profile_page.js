import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../logout/logout_button_container";

class ProfilePage extends React.Component {
    render() {
        return (
            <div className="profile-page-background">
                <div className="profile-header-parent">
                    <p className="profile-header">User Profile</p>
                </div>

                <div className="prof-page-body">
                    <p className="user-name">John Wick</p>
                    <p className="friends-list">Friends List (3)</p>
                    <p>Clear Grid Button</p>
                    <LogoutButton />
                </div>

                <Link className="back-to-home-button" to="/home">Back</Link>
            </div>
        )
    }
}

export default ProfilePage;
