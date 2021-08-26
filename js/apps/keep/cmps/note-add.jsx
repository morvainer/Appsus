import { noteService } from '../services/note.service.js';
export class NoteAdd extends React.Component {
  state = {
    type: 'text',
    inputValue: '',
    placeholder: 'Enter text...',
  };

  handleChangeType = ({ target }) => {
    const type = target.name;
    switch (type) {
      case 'text':
        this.setState({ placeholder: 'Enter text...', type: 'text' });
        break;
      case 'image':
        this.setState({ placeholder: 'Enter image URL...', type: 'image' });
        break;
      case 'video':
        this.setState({ placeholder: 'Enter video URL...', type: 'video' });
        break;
      case 'todo':
        this.setState({
          placeholder: 'Enter comma seperated list...',
          type: 'todo',
        });
        break;

      default:
        break;
    }
  };

  handleEnterInput = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState((prevState) => ({ ...prevState, [field]: value }));
  };

  render() {
    const { type, placeholder, inputValue } = this.state;
    return (
      <div className='note-add'>
        <input
          type='text'
          placeholder={placeholder}
          value={inputValue}
          name='inputValue'
          onChange={this.handleEnterInput}
        />
        <button name='text' onClick={this.handleChangeType}>
          Text
        </button>
        <button name='image' onClick={this.handleChangeType}>
          Image
        </button>
        <button name='video' onClick={this.handleChangeType}>
          Video
        </button>
        <button name='todo' onClick={this.handleChangeType}>
          Todo
        </button>
        <button
          name='addNote'
          onClick={() => {
            this.props.handleAddNote(this.state);
            this.setState({
              type: 'text',
              inputValue: '',
              placeholder: 'Enter text...',
            });
          }}
        >
          Add Note
        </button>
      </div>
    );
  }
}
