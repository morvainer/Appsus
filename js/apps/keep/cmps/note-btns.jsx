const { Link } = ReactRouterDOM;
import { ColorInput } from './ColorInput.jsx';

export class NoteButtons extends React.Component {
  //   onPinNote,
  //   onToggleEdit,
  //   onCloneNote,
  //   handleChange,
  //   note,
  //   onRemoveNote,
  // }) {
  state = {
    isColorsShown: false,
  };

  toggleBackgrounds = () => {
    this.setState({ isColorsShown: !this.state.isColorsShown });
  };

  render() {
    const {
      onPinNote,
      onToggleEdit,
      onCloneNote,
      handleChange,
      note,
      onRemoveNote,
    } = this.props;

    return (
      <div className='note-btns-container'>
        <button onClick={() => onPinNote(note)}>
          <i className='fas fa-thumbtack'></i>
        </button>
        <button onClick={() => onToggleEdit(note)}>
          <i className='far fa-edit'></i>
        </button>
        <button onClick={() => onCloneNote(note)}>
          <i className='fas fa-clone'></i>
        </button>
        <button onClick={() => onRemoveNote(note.id)}>
          <i className='fas fa-trash-alt'></i>
        </button>
        <button onClick={this.toggleBackgrounds}>
          <i className='fas fa-palette'></i>
        </button>

        <button>
          {' '}
          <Link to={`/email/compose/${note.id}`}>
            <i className='fas fa-envelope email-btn'></i>
          </Link>
        </button>
        {this.state.isColorsShown && <ColorInput handleChange={handleChange} />}
      </div>
    );
  }
}
