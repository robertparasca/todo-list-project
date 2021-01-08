import React from "react";
import "./styles.css";

import Todos from "./components/Todos/Todos";

export default function App() {
  return (
    <div className="App">
      <h1>Todos list</h1>
      <h2>Basic example of a React project!</h2>
      <Todos />
    </div>
  );
}
