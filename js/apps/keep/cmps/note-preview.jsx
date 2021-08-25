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
  };

  render() {
    const { note } = this.state;
    const { removeNote } = this.props;
    if (!note) return <h2>Loading..</h2>;
    const DynamicCmp = (props) => {
      console.log(props);
      switch (props.note.type) {
        case 'note-txt':
          return <NoteTxt {...props} />;
        case 'note-img':
          return <NoteImage {...props} />;
        case 'note-video':
          return <NoteVideo {...props} />;
        case 'note-todos':
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
        {/* <DynamicCmp note={note} /> */}

        {note.type === 'text' && <NoteTxt note={note} />}
        {note.type === 'image' && <NoteImage note={note} />}
        {note.type === 'video' && <NoteVideo note={note} />}
        {note.type === 'todo' && <NoteTodo note={note} />}
        <div className='note-preview-btns'>
          <button onClick={() => this.props.handleRemoveNote(note.id)}>
            -
          </button>
        </div>
        <ColorInput handleChange={this.handleChange} />
      </article>
    );
  }
}
