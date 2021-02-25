import React from 'react';

class CategoryBox extends React.Component {
  //change "text" to "title" when bryce pushes up edited validations
  render() {
    return (
        <div> 
            <h3>{this.props.text}</h3> 
            <ul>
              <h3>Tasks: </h3>
              <li>{this.props.tasks.title}</li>
            </ul>
        </div>
    );
  }
}

export default CategoryBox;
