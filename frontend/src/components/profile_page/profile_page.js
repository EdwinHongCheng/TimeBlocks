import React from "react";
import LogoutButton from "../logout/logout_button_container";

class ProfilePage extends React.Component {
    render() {
        return (
            <div className="profile-page-background">
                <p>Profile Page</p>
                <LogoutButton />
            </div>
        )
    }
}

export default ProfilePage;
