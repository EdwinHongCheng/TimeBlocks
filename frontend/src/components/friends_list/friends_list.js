import React from 'react';

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

    // [TEST] 
    deleteFriend() {
        this.setState({ friendsArray: ["Yugi", "Kaiba", "Joey"] })
    }

    render() {
        let mappedFriends = this.state.friendsArray.map((name, idx) => {
            return (
                <div className="friend-and-delete-button">
                    <div>
                        <li key={idx}>
                            {name}
                        </li>
                    </div>
                    <div>
                        <p className="friend-delete-button" 
                            onClick={this.deleteFriend}>x</p>
                    </div>
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
