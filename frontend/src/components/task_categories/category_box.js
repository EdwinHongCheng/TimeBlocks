import React from 'react';

class CategoryBox extends React.Component {
  render() {
    return (
        <div>
            <h3>{this.props.title}</h3>
            <ul>
              <li>{this.props.tasks}</li>
            </ul>
        </div>
    );
  }
}

export default CategoryBox;
