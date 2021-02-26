import React from 'react';
import Task from "../task/task"

const TaskCategoryItem = (props) => {
    return (
        <div className="category-container">
            <div className="category-info">
                <h1>Category Name</h1>
                <h2>3</h2>
            </div>
            <div className="category-tasks">
                <Task color="#ff0000"></Task>
                <Task color="#00ff00"></Task>
                <Task color="#0000ff"></Task>
            </div>
        </div>
    )
}

export default TaskCategoryItem;

// class CategoryBox extends React.Component {

//   //change "text" to "title" when bryce pushes up edited validations
//   render() {
//     let task = this.props.tasks.map(task => 
//       {
//       return (
//         <li>{task.title}</li>
//       )
//     })
    
//     return (
//         <div> 
//             <h3>{this.props.title}</h3> 
//             <ul>
//               <h6>Tasks: </h6>
//               <li>{task}</li>
//             </ul>
//             {/* <button onclick={this.task}>{this.props.title}</button> */}
//         </div>
//     );
//   };
// };

// export default CategoryBox;
