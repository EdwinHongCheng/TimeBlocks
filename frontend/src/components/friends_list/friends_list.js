import React from 'react';
import { Link } from 'react-router-dom';

class FriendsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let mappedFriends = this.props.friends.map((friend, idx) => {
            let x = { userId: friend.id };
            return (
                <div key={idx} className="friend-and-delete-button">
                    <li>
                        <Link className="friend-link" 
                            to={`/friends/${friend.id}`}
                        >{friend.name}</Link>
                    </li>
                    <p className="friend-delete-button" 
                        onClick={() => {
                            this.props.destroyFriend(x);
                            this.props.clearFriendErrors();}
                        }>x</p>
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
