// import React from "react";

export function NoteImage({ note }) {
  return (
    <React.Fragment>
      <h2>Image Note</h2>
      <h1>{note.info.title}</h1>
      <img src={note.info.url} />
    </React.Fragment>
  );
}
