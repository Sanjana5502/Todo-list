import React from 'react';
// import styles from './App.module.css';

const Todos = ({ todos, deleteTodo }) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}  style={{ 
            padding: '10px', 
            marginBottom: '5px',
            transition: 'background-color 0.3s',
            cursor: 'pointer',
            ':hover': { backgroundColor: 'lightblue' } 
          }} >
          <span onClick={() => { deleteTodo(todo.id) }}>{todo.context}</span>
        </div>
      )
    })
  ) : (
      <p className="center">You have no todos left, yay!</p>
    );

  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;
