import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    context: ''
  }

  handleChange = (e) => {
    this.setState({ context: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.context.trim()) {
      alert('Please enter a todo.');
      return;
    }
    this.props.addTodo(this.state);
    this.setState({ context: '' });
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo:</label>
          <input type='text' onChange={this.handleChange} value={this.state.context} />
          <button className="btn waves-effect waves-light" type="submit" name="action">Add
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    )
  }
}

export default AddTodo;
