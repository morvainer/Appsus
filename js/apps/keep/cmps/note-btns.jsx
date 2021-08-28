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
          <i class='fas fa-thumbtack'></i>
        </button>
        <button onClick={() => onToggleEdit(note)}>
          <i class='far fa-edit'></i>
        </button>
        <button onClick={() => onCloneNote(note)}>
          <i class='fas fa-clone'></i>
        </button>
        <button onClick={() => onRemoveNote(note.id)}>
          <i class='fas fa-trash-alt'></i>
        </button>
        <button onClick={this.toggleBackgrounds}>
          <i class='fas fa-palette'></i>
        </button>
        {this.state.isColorsShown && <ColorInput handleChange={handleChange} />}
      </div>
    );
  }
}
