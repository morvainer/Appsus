// import React from "react";
import { ToDoItem } from './todo-item.jsx';

export function NoteTodo({ note }) {
  return (
    <React.Fragment>
      <h1>Todo Note</h1>
      <ul>
        {note.info.todos.map((todo, idx) => {
          return <ToDoItem key={idx} todo={todo} />;
        })}
      </ul>
    </React.Fragment>
  );
}
