const { Link } = ReactRouterDOM;

// import { utilService } from '../services/util.service.js';
import { NoteText } from './note-txt.jsx';
import { NoteImage } from './note-image.jsx';
import { NoteVideo } from './note-video.jsx';
import { NoteTodo } from './note-todos.jsx';

export class NotePreview extends React.Component {
  state = {
    id: '',
    type: '',
    isPinned: '',
    info: {},
  };

  render() {
    const DynamicCmp = (props) => {
      switch (props.type) {
        case 'note-txt':
          return <NoteText {...props} />;
        case 'note-img':
          return <NoteImage {...props} />;
        case 'note-video':
          return <NoteVideo {...props} />;
        case 'note-todo':
          return <NoteTodo {...props} />;
        default:
          break;
      }
    };

    return (
      <article className='note-preview'>
        <DynamicCmp
          onChangeStyle={this.onChangeStyle}
          type={inputType}
          name='Popo'
        />
      </article>
    );
  }
}
