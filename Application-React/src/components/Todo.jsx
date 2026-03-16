import React, { useState } from "react";

export const Todo = () => {
  // const todo = [
  //   {
  //     id: 1,
  //     name: "React Js",
  //   },
  //   {
  //     id: 2,
  //     name: "JavaScript",
  //   },
  //   {
  //     id: 3,
  //     name: "Node Js",
  //   },
  // ];

  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  function addTodo() {
    const obj = {
      id: Date.now(),
      input,
    };

    setTodo([...todo, obj]);
  }

  function deleteTodo(id) {
    setTodo(todo.filter((todo) => todo.id != id));
  }

  function updateTodo(id) {
    const updatedTodo = todo.map((todo) =>
      todo.id === id ? { ...todo, input: input } : todo,
    );

    setTodo(updatedTodo);
  }

  return (
    <div>
      <div className="p-3 d-flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      {todo.map((todo) => (
        <ul className="d-flex gap-4 px-4 py-2" key={todo.id}>
          <li> {todo.input} </li>

          <div className="d-flex gap-3 ">
            <button
              style={{ cursor: "pointer" }}
              onClick={() => deleteTodo(todo.id)}
            >
              delete
            </button>
            <button onClick={() => updateTodo(todo.id)}>update </button>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default Todo;
