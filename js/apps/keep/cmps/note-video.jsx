export function NoteVideo({ note }) {
  return (
    <React.Fragment>
      <h2>Video Note</h2>
      <iframe width='420' height='315' src={note.info.url}></iframe>
    </React.Fragment>
  );
}
