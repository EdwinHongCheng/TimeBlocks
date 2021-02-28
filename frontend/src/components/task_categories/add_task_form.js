import React from 'react';

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput() {
        
    }

    render() {
        return(
            <form>
                <input
                placeholder="Task Title"
                value={this.state.title}
                onChange={this.handleInput}></input>
                <button>Add Task</button>
            </form>
        )
    }
}

export default TaskForm;