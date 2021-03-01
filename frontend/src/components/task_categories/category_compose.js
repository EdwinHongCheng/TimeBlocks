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
          <div className="category-form-container">
            <form onSubmit={this.handleSubmit}>
              <div className="categoryForm">    
                <input
                  type='text'
                  placeholder= "Category title..."
                  value={this.state.title}
                  onChange={this.update('title')}
                  id="createCategoryTitle"
                />
                
                <select name="colors" id="category-color-select" onChange={this.update('color')}>
                    <option id="color-choice" value="">-Choose a color-</option>
                    <option id="color-choice" value="#ff3232">Red</option>
                    <option id="color-choice" value="#ffd27f">Orangle</option>
                    <option id="color-choice" value="#e9f60e">Yellow</option>
                    <option id="color-choice" value="#b9ffb7">Green</option>
                    <option id="color-choice" value="#b3f6f2">Blue</option>
                    <option id="color-choice" value="#b899ff">Purple</option>
                    <option id="color-choice" value="#c0c0c0">Grey</option>
                    <option id="color-choice" value="#ffc5d9">Pink</option>
                    <option id="color-choice" value="#d29494">Brown</option>
                    <option id="color-choice" value="#f8f8ff">White</option>
                </select>
              </div>

              <button type='submit' id="createCategoryButton">Create Category</button>
              
            </form>


            
          </div>
        );
      }
    }
     
    export default CategoryCompose;
    
