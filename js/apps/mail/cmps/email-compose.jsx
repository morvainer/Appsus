const { Link } = ReactRouterDOM;
import { emailService } from '../services/email.service.js';
import { noteService } from '../../keep/services/note.service.js';

export class EmailCompose extends React.Component {
  state = {
    to: '',
    subject: '',
    message: '',
  };

  componentDidMount() {
    const { match } = this.props;
    if (!match) return;
    const { noteid } = this.props.match.params;
    if (!noteid) return;
    var note = noteService.getNoteById(noteid).then((note) => {
      const { type } = note;
      switch (type) {
        case 'text':
          this.setState({ message: note.info.text });
          break;
        case 'image':
          this.setState({ subject: note.info.title, message: note.info.url });
          break;
        case 'video':
          this.setState({ subject: note.info.label, message: note.info.url });
          break;
        case 'todo':
          this.setState({ message: note.info.todos });
          break;
        default:
          break;
      }
    });
  }

  handleChange = ({ target }) => {
    const field = target.name;
    this.setState((prevState) => ({ ...prevState, [field]: target.value }));
  };

  onAddEmail = (ev) => {
    ev.preventDefault();
    const { toggleCompose } = this.props;
    const { to, subject, message } = this.state;
    emailService.addEmail(to, subject, message);
    toggleCompose();
  };
  render() {
    const { to, subject, message } = this.state;
    const { toggleCompose } = this.props;
    return (
      <div>
        <form
          className='email-compose'
          onSubmit={(event) => {
            this.onAddEmail(event);
          }}
        >
          <label htmlFor='to' className={'to-label'}>
            To:
          </label>
          <input
            type='text'
            name='to'
            id='to'
            className={'to-input'}
            value={to}
            onChange={this.handleChange}
          />
          <label htmlFor='subject' className={'subject-label'}>
            Subject:
          </label>
          <input
            type='text'
            name='subject'
            id='subject'
            className={'subject-input'}
            value={subject}
            onChange={this.handleChange}
          />
          <textarea
            id=' message'
            name='message'
            value={message}
            className={'message-input'}
            placeholder='Enter your message here'
            rows='4'
            cols='50'
            onChange={this.handleChange}
          ></textarea>
          <button className={'send-btn'}>Send</button>
          <button className={'back-compose-btn'}>
            {' '}
            <Link to={`/email/inbox`} onClick={() => toggleCompose()}>
              <span>go back</span>
            </Link>
          </button>
        </form>
      </div>
    );
  }
}
