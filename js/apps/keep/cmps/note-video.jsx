import { noteService } from '../services/note.service.js';
export class NoteVideo extends React.Component {
  state = {
    note: null,
  };

  componentDidMount() {
    const { note } = this.props;
    this.setState({ note: note });
  }

  saveChanges = (ev) => {
    ev.preventDefault();
    this.props.onSave(this.state.note);
  };

  handleChange = (ev) => {
    ev.preventDefault();
    const value = ev.target.value;
    const field = ev.target.name;
    this.setState({
      note: {
        ...this.state.note,
        info: { ...this.state.note.info, [field]: value },
      },
    });
    noteService.getNotes();
  };
  render() {
    const { note } = this.props;
    if (!this.state.note) return <h1>loading...</h1>;
    const { label, url } = this.state.note.info;

    return (
      <div className='note-video'>
        <i className='fab fa-youtube'></i>
        {!note.isEditOn && (
          <div>
            <h2>Video Note</h2>
            <h3 id={note.id}>{note.info.label}</h3>
            <iframe width='420' height='315' src={url}></iframe>
          </div>
        )}
        {note.isEditOn && (
          <div>
            <form onSubmit={this.saveChanges}>
              <h3 id={note.id}>{note.info.label}</h3>
              <input
                name='label'
                value={label}
                // placeholder='Enter title...'
                onChange={this.handleChange}
              />

              <iframe width='420' height='315' src={url}></iframe>
              <input
                name='url'
                value={url}
                // placeholder='Enter URL...'
                onChange={this.handleChange}
              />
              <button>Save Edit</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}
