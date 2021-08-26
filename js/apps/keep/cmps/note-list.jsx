import { noteService } from '../services/note.service.js';
import { NotePreview } from './note-preview.jsx';

export class NoteList extends React.Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    const { notes } = this.props;
    this.setState({ notes });
  }

  render() {
    const handleRemoveNote = (noteId) => {
      noteService.removeNote(noteId);
      const { notes } = this.state;
      this.setState({ notes: notes });
    };

    const { notes } = this.props;
    return (
      <div className='note-list'>
        {notes.map((note) => (
          <NotePreview
            key={note.id}
            note={note}
            handleRemoveNote={handleRemoveNote}
            onPinNote={this.props.onPinNote}
            onToggleEdit={this.props.onToggleEdit}
            onSave={this.props.onSave}
            onChangeBackground={this.props.onChangeBackground}
            onCloneNote={this.props.onCloneNote}
          />
        ))}
      </div>
    );
  }
}
