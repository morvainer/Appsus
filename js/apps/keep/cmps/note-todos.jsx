// import React from "react";

export function NoteTodo({ note }) {
  return (
    <React.Fragment>
      <h1>Todo Note</h1>
      <h1>{note.info.label}</h1>
      <ul>
        {note.info.todos.map((todo, idx) => (
          <li key={idx}>{todo.txt}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}
