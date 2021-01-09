import React from "react";
import "./Todo.css";

export default function Todo({ todo, markTodoAsDone, deleteTodo }) {
  const classes = `todo ${todo.completed ? "crossed" : ""}`;

  const markDone = () => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    markTodoAsDone(updatedTodo);
  };

  const removeTodo = () => {
    deleteTodo(todo);
  };

  return (
    <div className='todo-container'>
      <div>
      <button onClick={removeTodo}>❌</button>
      </div>
      <div className={classes}>
        <h2>{todo.description}</h2>
        <small>{todo.completed ? "❤️" : "💔"}</small>
      </div>
      <div>
        <button onClick={markDone}>{todo.completed ? '🔒' : '🔓'}</button>
      </div>
    </div>
  );
}
