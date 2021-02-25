import React from 'react';

class CategoryBox extends React.Component {
  
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
