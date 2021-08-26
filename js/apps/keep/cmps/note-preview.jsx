import { NoteTxt } from './note-txt.jsx';
import { NoteImage } from './note-image.jsx';
import { NoteVideo } from './note-video.jsx';
import { NoteTodo } from './note-todos.jsx';
import { ColorInput } from './ColorInput.jsx';
import { noteService } from '../services/note.service.js';

export class NotePreview extends React.Component {
  state = {
    note: {
      id: '',
      type: '',
      isPinned: '',
      info: {},
      backgroundColor: '',
    },
  };

  componentDidMount() {
    const { note } = this.props;
    this.setState({ note });
  }

  handleChange = (color) => {
    this.setState((prevState) => ({
      note: { ...prevState.note, ['backgroundColor']: color },
    }));
    this.props.onChangeBackground(this.state.note.id, color);
  };

  render() {
    // const { note } = this.state;
    const { note } = this.props;
    const { removeNote } = this.props;
    if (!note) return <h2>Loading..</h2>;
    const DynamicCmp = (props) => {
      console.log(props);
      switch (props.note.type) {
        case 'text':
          return <NoteTxt {...props} />;
        case 'image':
          return <NoteImage {...props} />;
        case 'video':
          return <NoteVideo {...props} />;
        case 'todo':
          return <NoteTodo {...props} />;
        default:
          break;
      }
    };
    return (
      <article
        className={'note-preview'}
        style={{ backgroundColor: note.backgroundColor }}
      >
        {/* {!note && <DynamicCmp note={note} />} */}
        {/* <DynamicCmp note={note} /> */}

        {note.type === 'text' && (
          <NoteTxt note={note} onSave={this.props.onSave} />
        )}
        {note.type === 'image' && (
          <NoteImage note={note} onSave={this.props.onSave} />
        )}
        {note.type === 'video' && (
          <NoteVideo note={note} onSave={this.props.onSave} />
        )}
        {note.type === 'todo' && (
          <NoteTodo note={note} onSave={this.props.onSave} />
        )}
        <div className='note-preview-btns'>
          <button onClick={() => this.props.handleRemoveNote(note.id)}>
            -
          </button>
        </div>
        <button onClick={() => this.props.onPinNote(note)}>PIN</button>
        <button onClick={() => this.props.onToggleEdit(note)}>Edit</button>
        <ColorInput handleChange={this.handleChange} />
      </article>
    );
  }
}
