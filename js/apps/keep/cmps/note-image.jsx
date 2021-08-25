// import React from "react";

export function NoteImage({ note }) {
  return (
    <React.Fragment>
      <h2>Image Note</h2>
      <img src={note.info.url} />
    </React.Fragment>
  );
}
