const { Link } = ReactRouterDOM;
import { emailService } from '../services/email.service.js';

export class EmailCompose extends React.Component {
  state = {
    to: '',
    subject: '',
    message: '',
  };

  componentDidMount() {}

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
    );
  }
}
