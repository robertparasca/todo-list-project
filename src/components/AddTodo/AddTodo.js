import React, { useState } from "react";
import "./AddTodo.css";

export default function AddTodo({ addTodo }) {
  const [description, setDescription] = useState("");

  const saveTodo = (event) => {
    event.preventDefault();
    const todo = {
      description,
      completed: false,
    };
    addTodo(todo).then(() => setDescription(""));
  };

  const onChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="add-todo-container">
      <h3>Add a todo</h3>
      <form onSubmit={saveTodo}>
        <div className="form-item">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            onChange={onChange}
            value={description}
          />
        </div>
        <div className="form-item">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}
