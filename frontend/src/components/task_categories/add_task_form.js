import React from 'react';

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        this.setState({title: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = { title: this.state.title,
                        catId: this.props.catId };
        this.props.newTask(data);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                type="text" onChange={this.handleInput} id="task-input"
                placeholder="Task Title" value={this.state.title}
                ></input>
                <button id="task-button">Add Task</button>
            </form>
        )
    }
}

export default TaskForm;