import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../logout/logout_button_container";

class ProfilePage extends React.Component {
    render() {
        return (
            <div className="profile-page-background">
                <p>Profile Page</p>
                <Link to="/home">Back to Home</Link>
                <p>Username (Placeholder)</p>
                <LogoutButton />
            </div>
        )
    }
}

export default ProfilePage;
