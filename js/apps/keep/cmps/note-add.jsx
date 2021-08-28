import { noteService } from '../services/note.service.js';
export class NoteAdd extends React.Component {
  state = {
    type: 'text',
    inputValue: '',
    placeholder: 'Enter text...',
    active: 'text',
  };

  handleChangeType = ({ target }) => {
    const type = target.name;
    switch (type) {
      case 'text':
        this.setState({
          placeholder: 'Enter text...',
          type: 'text',
          active: 'text',
        });
        break;
      case 'image':
        this.setState({
          placeholder: 'Enter image URL...',
          type: 'image',
          active: 'image',
        });
        break;
      case 'video':
        this.setState({
          placeholder: 'Enter video URL...',
          type: 'video',
          active: 'video',
        });
        break;
      case 'todo':
        this.setState({
          placeholder: 'Enter comma seperated list...',
          type: 'todo',
          active: 'todo',
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
    const { type, placeholder, inputValue, active } = this.state;
    return (
      <div className='note-add-container'>
        <input
          type='text'
          placeholder={placeholder}
          value={inputValue}
          name='inputValue'
          onChange={this.handleEnterInput}
        />
        <div className='note-add-btns-container'>
          <button
            name='text'
            className={active === 'text' ? 'active' : ''}
            onClick={this.handleChangeType}
          >
            <i className='fas fa-font'></i>
          </button>
          <button
            name='image'
            className={active === 'image' ? 'active' : ''}
            onClick={this.handleChangeType}
          >
            <i className='far fa-image'></i>
          </button>
          <button
            name='video'
            className={active === 'video' ? 'active' : ''}
            onClick={this.handleChangeType}
          >
            <i className='fab fa-youtube'></i>
          </button>
          <button
            name='todo'
            className={active === 'todo' ? 'active' : ''}
            onClick={this.handleChangeType}
          >
            <i className='fas fa-list'></i>
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
      </div>
    );
  }
}
