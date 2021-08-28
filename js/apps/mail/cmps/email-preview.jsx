
import { LongTxt } from "../../../cmps-general/LongTxt.jsx"

export function EmailPreview({ email }) {

    return (
        <div className={`email-preview  ${(!email.isRead) && email.status === 'inbox' ? 'not-read' : 'mail-read'} 
         ${(email.status === 'sent') ? 'sent-mail' : ''}`}>
            <div className="email-preview-div email-prev-from">  {email.fromName} </div>
            <div className="email-preview-div email-prev-subject">{email.subject} - </div>
            <div className="email-preview-div email-prev-message">
                <LongTxt text={email.message} />
            </div>
            <div className="email-preview-div email-prev-date">  {email.sentAt}</div>
        </div>
    )

}