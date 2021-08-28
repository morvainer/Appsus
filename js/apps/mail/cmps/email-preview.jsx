import { LongTxt } from '../../../cmps-general/LongTxt.jsx';

export function EmailPreview({ email }) {
  return (
    <div
      className={`email-preview-container  ${
        !email.isRead && email.status === 'inbox' ? 'not-read' : 'mail-read'
      } 
         ${email.status === 'sent' ? 'sent-mail' : ''}`}
    >
      <div className='email-prev-item'>
        <h3 className=''> {email.fromName} </h3>
      </div>
      <div className='email-prev-item'>
        <h3 className=''>{email.subject} - </h3>
      </div>
      <div className='email-prev-item message'>
        <LongTxt text={email.message} />
      </div>
      <div className='email-prev-item'>
        <h3 className=''> {email.sentAt}</h3>
      </div>
    </div>
  );
}
