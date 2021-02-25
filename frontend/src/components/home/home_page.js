import React from "react"
import Grid from "../grid/grid";
// [TEST][WORKS] Profile Page
import { Link } from "react-router-dom";

class HomePage extends React.Component {
    render() {
        return (
          <div className="home-container">
            <Grid />
            {/* [TEST][WORKS] Profile Page */}
            <Link to="/profile-page">Profile Page</Link>
          </div>
        );
    }
}

export default HomePage;