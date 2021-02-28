import React from 'react';
// import CategoryBox from './task_category_item'

class CategoryCompose extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.category; 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.newCategory(this.state); 
    }
    
    update(field) { 
        return e => this.setState({ [field]: e.currentTarget.value }); 
    }
    
    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>     
                <input
                  type='text'
                  placeholder= "Category title..."
                  value={this.state.title}
                  onChange={this.update('title')}
                  id="createCategoryTitle"
                />
                
                <input
                    type='text'
                    placeholder= "Category color..."
                    value={this.state.color}
                    onChange={this.update('color')}
                    id="createCategoryColor"
                />
              <button type='submit' id="createCategoryButton">Create Category</button>
            </form>
          </div>
        );
      }
    }
     
    export default CategoryCompose;
    

