import React from 'react';
import { Link } from 'react-router-dom';

class FriendsList extends React.Component {
    render() {
        let mappedFriends = this.props.friends.map((friend, idx) => {
            return (
                <li key={friend.id} className="friend-and-delete-button">
                    <p>
                        <Link className="friend-link" 
                            to={`/friends/${friend.id}`}
                        >{friend.name}</Link>
                    </p>
                    <p className="friend-delete-button" 
                        onClick={() => {
                            this.props.destroyFriend({ userId: friend.id });
                            this.props.clearFriendErrors();
                        }
                        }>x</p>
                </li>
            );
        })

        return (
            <ul className={`friends-dropdown-true`} >
                {mappedFriends}
            </ul>
        );
    }
}

export default FriendsList;
