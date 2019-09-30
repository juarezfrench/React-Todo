import React from 'react';

class ListForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ''
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
  };

  render() {
    return (
      <form onSubmit={this.submitTodo(e)}>
        <input
          type="text"
          value={this.todo}
          name="item"
          onChange={this.handleChanges(e)}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;
