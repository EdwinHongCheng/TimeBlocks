import React from 'react';

class AddFriendForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // [WORKS] clears errors
    componentWillUnmount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        };
    };

    // [WORKS BUT BUGGY]
    handleSubmit(e) {
        e.preventDefault();
        this.props.newFriend(this.state)
    }
    
    render() {
        // [NOTE] "Return/Enter" -> form is submitted
        // let enterSubmitsForm = this.handleSubmit;
        // document.onkeydown = function(e) {
        //     if (e.keyCode === 13) {
        //       enterSubmitsForm(e)
        //     }
        // };

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
                  {this.props.errors.email}
                  {/* Placeholder Error */}
                </p>
            </>
        )

        return (
            addFriendForm
        );
    }
}

export default AddFriendForm;
