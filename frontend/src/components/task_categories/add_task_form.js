import React from 'react';

class TaskForm extends React.Component {
    render() {
        return(
            <form>
                <input placeholder="Task Title"></input>
                <button>Add Task</button>
            </form>
        )
    }
}

export default TaskForm;