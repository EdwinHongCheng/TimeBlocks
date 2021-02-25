import React from "react";
import { Link } from "react-router-dom";

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
        return (<Link to={"/"}/>)
    }

    render() {
        return (
            <div className="profile-page-background">
                
                <div className="profile-header-parent">
                    <p className="profile-header">User Profile</p>
                </div>

                <div className="prof-page-body">
                    <p className="user-name">John Wick</p>
                    <p className="friends-list">Friends List (3)</p>

                    <div className="profile-page-buttons">
                        <p className="clear-grid-button" onClick={() => console.log("hello")}>
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
