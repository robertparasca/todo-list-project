import React, { useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import "./Todos.css";

const mockTodos = [
  {
    title: "Learn React",
    completed: true,
    id: 1
  },
  {
    title: "Be awesome",
    completed: false,
    id: 2
  }
];

export default function Todos() {
  const [todos, setTodos] = useState([]);

  const markTodoAsDone = (todo) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === todo.id) return todo;
      return item;
    });
    setTodos(updatedTodos);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        // the API returns 200 todos. We will use only the first three.
        const someTodos = json.splice(0, 3);
        setTodos(someTodos);
      });
    // setTodos(mockTodos);
  }, []);

  return (
    <div className="todos">
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} markTodoAsDone={markTodoAsDone} />
      ))}
    </div>
  );
}
