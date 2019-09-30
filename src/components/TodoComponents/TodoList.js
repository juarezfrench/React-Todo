import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  // const sortedList = props.todos.sort((a, b) => a.completed - b.completed);
  return (
    <div className="shopping-list">
      {props.todos.map(todo => (
        <todo key={todo.id} todo={todo} toggletTdo={props.toggletodo} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;

