const { Link } = ReactRouterDOM;

import { eventBusService } from '../../../services-general/event-bus-service.js';
import { noteService } from '../../keep/services/note.service.js';
import { emailService } from '../services/email.service.js';

export class EmailDetails extends React.Component {
  state = {
    emailId: this.props.match.params.emailId,
    currEmail: null,
    countReadMails: 0,
  };
  componentDidMount() {
    this.getEmailByID();
    this.updateIsRead();
  }
  updateIsRead = () => {
    emailService.updateEmailIsRead(this.state.emailId);
  };
  onBack = () => {
    this.props.history.push('/email/inbox');
  };
  onDeleteEmail = () => {
    emailService.deleteEmail(this.state.emailId).then(this.onBack);
  };
  getEmailByID = () => {
    emailService.getEmailById(this.state.emailId).then((currEmail) => {
      this.setState({ currEmail });
    });
  };

  saveNote = () => {
    emailService.getEmailById(this.state.emailId).then((currEmail) => {
      noteService.saveEmailAsNote(currEmail).then(() => {
        eventBusService.emit('user-msg', {
          txt: `Note Created!`,
          type: 'success',
        });
      });
    });
  };

  render() {
    const { currEmail } = this.state;
    if (!currEmail) return <h2>Loading...</h2>;
    return (
      <div className='email-details-div'>
        <div className='email-det-title'> {currEmail.subject}</div>
        <div className='email-det-from'>
          From: {currEmail.fromName} ({currEmail.fromEmail})
        </div>
        <div className='email-det-message'> {currEmail.message}</div>
        <button
          className='del-btn-emaildetails'
          onClick={() => this.onDeleteEmail()}
        >
          Delete Email{' '}
        </button>
        <button className='back-btn-emaildetails'>
          {' '}
          <Link to={`/email/inbox`}>
            <span>go back</span>
          </Link>{' '}
        </button>
        <button
          className='make-note-btn-emaildetails'
          onClick={() => {
            this.saveNote();
          }}
        >
          Save Note
        </button>
      </div>
    );
  }
}
