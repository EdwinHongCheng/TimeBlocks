import React from 'react';

class AddFriendForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        // [WIP] To be filled in later
    }
    
    render() {
        let addFriendForm = (
            <div className="add-friend-parent">
                <p className="add-friend-header">Add a New Friend</p>

                <form onSubmit={this.handleSubmit}>
                    <input
                        className="add-friend-input"
                        type="text"
                        value={this.state.email}
                        placeholder="Enter friend's email here"
                        onChange={this.update('email')}
                    />
                    <p className="add-friend-button" 
                        onClick={this.handleSubmit}
                    >+</p>
                </form>
            </div>
        )

        return (
            addFriendForm
        );
    }
}

export default AddFriendForm;
