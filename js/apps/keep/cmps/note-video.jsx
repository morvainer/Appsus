export function NoteVideo({ note }) {
  return (
    <React.Fragment>
      <h2>Video Note</h2>
      <h1>{note.info.title}</h1>
      <video width='400' height='200' controls src={note.info.url}></video>
    </React.Fragment>
  );
}
