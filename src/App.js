import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

const todoData = [{
  task: 'Organize Garage',
  id: 15288170077286,
  completed: false
},

{
  task: 'Bake Cookies',
  id: 1528817084358,
  completed: true
}
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

constructor(){
  super();
  this.state = {
    todos: todoData

  }
}

toggleItem = id => {
  console.log('ID', id);
  this.setState({
    todos: this.state.todos.map(item => {
      if (item.id === id) {
        return {
          ...item,
        purchased: !item.purchased
        };
      } else {
        return item;
      }
    })
  });
};
 
 addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      todos: [...this.state.todos, newItem]
    });
  };

  clearPurchased = () => {
    this.setState({
      todos: this.state.todos.filter(item => !item.purchased)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          {/* <TodoForm addItem={this.addItem} /> */}
        </div>
        <TodoList
          todos={this.state.todos}
          toggleItem={this.toggleItem}
          toggleCompleted = {
            this.toggleCompleted}
        />
         <TodoForm addTodo={this.addItem} filterCompleted = {this.filterCompleted}/>
      </div>
    );
  }
}

export default App;
