import React from "react";
import CategoryBox from "./category_box"

class TaskCategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentWillMount() {
        this.props.fetchCategories(this.props.currentUser.id)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({categories: nextProps.categories})
    }

    render() {
        if (this.state.categories.length === 0) {
            return (<div>There are no categories</div>)
          } else {
            return (
              <div>
                <h1>Categories:</h1>
                {this.state.categories.map(category => (
                  <CategoryBox key={category._id} title={category.title} tasks={category.tasks} />
                ))}
              </div>
            );
          }
        }
      }

export default TaskCategories;
