import React, { useEffect, useState } from "react";

import Todo from "../Todo/Todo";
import AddTodo from "../AddTodo/AddTodo";

import "./Todos.css";

const mockTodos = [
  {
    description: "Learn React",
    completed: true,
    id: 1,
  },
  {
    description: "Be awesome",
    completed: false,
    id: 2,
  },
];

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/api/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  const markTodoAsDone = (todo) => {
    fetch(`http://localhost:8001/api/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then((response) => response.json())
      .then((json) => {
        const updatedTodos = todos.map((item) => {
          if (item.id === json.id) return json;
          return item;
        });
        setTodos(updatedTodos);
      });
  };

  const deleteTodo = (todo) => {
    fetch(`http://localhost:8001/api/todos/${todo.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const updatedTodos = todos.filter((item) => item.id !== json.id);
        setTodos(updatedTodos);
      });
  };

  const addTodo = (todo) => {
    const promise = fetch("http://localhost:8001/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }).then((response) => response.json());

    promise.then((json) => {
      const updatedTodos = [...todos, json];
      setTodos(updatedTodos);
    });

    return promise;
  };

  return (
    <div className="todos">
      <AddTodo addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          markTodoAsDone={markTodoAsDone}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}
