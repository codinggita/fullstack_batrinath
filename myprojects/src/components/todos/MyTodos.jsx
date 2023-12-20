import React from "react";
import { useState } from "react";
function genrateId(fdg) {
  return Math.floor(Math.random() * 100);
}
function MyTodos() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input) {
      setTodos((prtodos) => [...prtodos, { text: input, id: genrateId() }]);
      setInput("");
    }
  };
  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => id !== t.id));
  };
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" onClick={handleSubmit}>
        new Todo
      </button>
      <ul>
        {todos.map(({ text, id }) => (
          <li key={id}>
            <span>{text}</span>
            <button type="button" onClick={() => removeTodo(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MyTodos;
