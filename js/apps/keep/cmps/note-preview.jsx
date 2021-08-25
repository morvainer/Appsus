import { NoteTxt } from './note-txt.jsx';
import { NoteImage } from './note-image.jsx';
import { NoteVideo } from './note-video.jsx';
import { NoteTodo } from './note-todos.jsx';
import { ColorInput } from './ColorInput.jsx';

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
    // this.setState((prevState) => ({ ...prevState, backgroundColor: color }));
  };

  onRemoveNote = (note) => {
    //   removeNote()
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

        {note.type === 'note-txt' && <NoteTxt note={note} />}
        {note.type === 'note-img' && <NoteImage note={note} />}
        {/* {note.type === 'note-video' && <NoteVideo note={note} />} */}
        {note.type === 'note-todos' && <NoteTodo note={note} />}
        <div className='note-preview-btns'>
          {/* <button onClick={() => this.onRemoveNote(note.id)}>-</button> */}
        </div>
        <ColorInput handleChange={this.handleChange} />
      </article>
    );
  }
}
