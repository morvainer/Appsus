import { NoteAdd } from '../cmps/note-add.jsx';
import { NoteList } from '../cmps/note-list.jsx';
import { noteService } from '../services/note.service.js';

export class NoteApp extends React.Component {
  state = {
    notes: [],
    filterBy: null,
  };
  componentDidMount() {
    this.loadNotes();
  }
  loadNotes = () => {
    noteService.query(this.state.filterBy).then((notes) => {
      this.setState({ notes });
    });
  };

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadNotes);
  };

  handleAddNote = (note) => {
    const { inputValue } = note;
    if (!inputValue.trim().length) return;
    noteService.addNote(note);
    this.loadNotes();
  };

  render() {
    const { notes } = this.state;
    return (
      <section className='notes-app'>
        <h1>NoteApp</h1>
        <NoteAdd handleAddNote={this.handleAddNote} />
        <NoteList notes={notes} />
      </section>
    );
  }
}
