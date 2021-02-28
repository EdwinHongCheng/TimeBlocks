// import {RECEIVE_NEW_TASK, REMOVE_TASK, RECEIVE_TASK} from "../actions/task_actions"

// const TasksReducer = (oldState={}, action) => {
//     Object.freeze(oldState);
//     let nextState = Object.assign({}, oldState);

//     switch(action.type) {
//         case RECEIVE_NEW_TASK:
//             nextState[action.task.id] = action.task;
//             return nextState;
//         case REMOVE_TASK:
//             delete nextState[action.taskId]
//             return nextState;
//         case RECEIVE_TASK: //unsure
//             nextState[action.taskId] = action.taskId
//             return nextState
//         default:
//             return oldState;
//     }
// }

// export default TasksReducer