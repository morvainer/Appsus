// import React from 'react';

export function NoteTxt({ note }) {
  return (
    <div className='note-txt'>
      <h2>Text Note</h2>
      <h3 id={note.id}>{note.info.text}</h3>
    </div>
  );
}
