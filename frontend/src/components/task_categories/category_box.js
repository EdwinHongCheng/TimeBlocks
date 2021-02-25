import React from 'react';

class CategoryBox extends React.Component {

  //change "text" to "title" when bryce pushes up edited validations
  render() {
    let task = this.props.tasks.map(task => 
      {
      return (
        <li>{task.title}</li>
      )
    })
    
    return (
        <div> 
            <h3>{this.props.title}</h3> 
            <ul>
              <h6>Tasks: </h6>
              <li>{task}</li>
            </ul>
            {/* <button onclick={this.task}>{this.props.title}</button> */}
        </div>
    );
  };
};

export default CategoryBox;
