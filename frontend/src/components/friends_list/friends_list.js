import React from 'react';
import { Link } from 'react-router-dom';

class FriendsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // [TEST] Placeholder: Array of Friend's Names
            friendsArray: [
            "Dr. Seuss",
            "Nujabes",
            "Bobby Fischer",
            "Magnus Carlsen",
            "Leffen",
            "mang0",
            "Zain",
            "Garry Kasparov",
            "Jose Raul Capablanca",
            "Hikaru Nakamura",
            "Fabiano Caruana",
            "Judit Polgar",
            "Mew2King"
        ]
        };

        this.deleteFriend = this.deleteFriend.bind(this);
    }

    // [TEST] replaces current local state's array with the below placeholder
    deleteFriend() {
        this.setState({ friendsArray: [
            "Nujabes",
            "Bobby Fischer",
            "Magnus Carlsen",
            "Leffen",
            "mang0",
            "Zain",
            "Garry Kasparov",
            "Jose Raul Capablanca",
            "Hikaru Nakamura",
            "Fabiano Caruana",
            "Judit Polgar",
            "Mew2King"
        ] })
        console.log("You have removed a friend from you friend's list.")
    }

    render() {
        let mappedFriends = this.state.friendsArray.map((name, idx) => {
            return (
                <div key={idx} className="friend-and-delete-button">
                    <li>
                        {/* [WIP] change path to friendEmail (later) */}
                        <Link className="friend-link" 
                            to={`/friends/${name}`}
                        >{name}</Link>
                    </li>
                    <p className="friend-delete-button" 
                        onClick={this.deleteFriend}>x</p>
                </div>
            );
        })

        return (
            <>
                {mappedFriends}
            </>
        );
    }
}

export default FriendsList;
