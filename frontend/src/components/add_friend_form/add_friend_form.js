import React from 'react';

class AddFriendForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillUnmount() {
        this.props.clearFriendErrors();
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        };
    };

    // [WORKS]
    handleSubmit(e) {
        e.preventDefault();
        this.props.clearFriendErrors();
        let friendEmail = this.state;
        this.setState({ email: "" })
        this.props.newFriend(friendEmail);
    }
    
    render() {
        // [NOTE] "Return/Enter" -> form is submitted
        let enterSubmitsForm = this.handleSubmit;
        document.onkeydown = function(e) {
            if (e.keyCode === 13) {
              enterSubmitsForm(e)
            }
        };

        let addFriendForm = (
            <>
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
                
                <p className="add-friend-error">
                  {this.props.errors[0]}
                </p>
            </>
        )

        return (
            addFriendForm
        );
    }
}

export default AddFriendForm;
