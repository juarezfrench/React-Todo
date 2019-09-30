import React from 'react';


const Todo = props => {
console.log('Todo.js -> %cprops:', 'color: cornflowerblue', props)
  return (
    <div
      className={`todo${props.todo.completed ? ' completed' : ''}`}
      onClick={() => props.toggleTodo(props.todo.id)}
    >
      <p>{props.todo.name}</p>
    </div>
  );
};

export default Todo;