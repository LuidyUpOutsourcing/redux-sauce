import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Creators as TodoActions } from "../../store/ducks/todos";
import "../../styles.css";

export default ({ toggleTodo, removeTodo, addTodo }) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const todos = useSelector((store) => store.todos.data);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(TodoActions.addTodo(input));
    setInput("");
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.complete ? <s>{todo.text}</s> : todo.text}
            <div>
              <button onClick={() => dispatch(TodoActions.toggleTodo(todo.id))}>
                Toggle
              </button>
              <button onClick={() => dispatch(TodoActions.removeTodo(todo.id))}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
