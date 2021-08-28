import { NoteAdd } from '../cmps/note-add.jsx';
import { NoteFilter } from '../cmps/note-filter.jsx';
import { NoteList } from '../cmps/note-list.jsx';
import { noteService } from '../services/note.service.js';
import { eventBusService } from '../../../services-general/event-bus-service.js';

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
    eventBusService.emit('user-msg', {
      txt: `Note Added!`,
      type: 'success',
    });
  };

  onPinNote = (note) => {
    noteService.pinNote(note.id).then(() => this.loadNotes());
  };

  onToggleEdit = (note) => {
    noteService.toggleEdit(note.id).then(() => this.loadNotes());
  };

  onSave = (note) => {
    noteService.saveEdit(note).then(() => {
      this.onToggleEdit(note);
      this.loadNotes();
    });
    eventBusService.emit('user-msg', {
      txt: `Note Saved!`,
      type: 'success',
    });
  };

  onChangeBackground = (noteId, color) => {
    noteService.changeBackground(noteId, color).then(() => this.loadNotes());
  };

  onCloneNote = (note) => {
    noteService.cloneNote(note).then(() => this.loadNotes());
    eventBusService.emit('user-msg', {
      txt: `Note Cloned!`,
      type: 'success',
    });
  };

  render() {
    const { notes } = this.state;
    return (
      <section className='notes-app flex align-center'>
        <h1 className='note-app-title'>NoteApp</h1>
        <NoteFilter
          filterBy={this.state.filterBy}
          onSetFilter={this.onSetFilter}
        />
        <NoteAdd handleAddNote={this.handleAddNote} />
        <NoteList
          notes={notes}
          onPinNote={this.onPinNote}
          onToggleEdit={this.onToggleEdit}
          onSave={this.onSave}
          onChangeBackground={this.onChangeBackground}
          onCloneNote={this.onCloneNote}
        />
      </section>
    );
  }
}
