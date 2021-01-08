import React from "react";
import "./Todo.css";

export default function Todo({ todo, markTodoAsDone }) {
  const classes = `todo ${todo.completed ? "crossed" : ""}`;

  const onClick = () => {
    const updatedTodo = { ...todo, isDone: !todo.completed };
    markTodoAsDone(updatedTodo);
  };

  return (
    <div className={classes} onClick={onClick}>
      <h2>{todo.title}</h2>
      <small>{todo.completed ? "❤️" : "💔"}</small>
    </div>
  );
}
