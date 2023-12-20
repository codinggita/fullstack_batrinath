import React, { useEffect } from "react";
import { useState } from "react";
function genrateId() {
  return Math.floor(Math.random() * 100);
}
function TestCode() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    console.log(input)
      setTodos((todos) => {
        todos.push({
          text: input,
          id: genrateId(),
        });
      });
   console.log(todos)
      setTodos("");
    
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
      <ul>{todos}</ul>
    </>
  );
}

// map(({ text, id }) => (
//   <li key={id}>
//     <span>{text}</span>
//     <button type="button" onClick={() => removeTodo(id)}>
//       Delete
//     </button>
//   </li>
// ))

export default TestCode;