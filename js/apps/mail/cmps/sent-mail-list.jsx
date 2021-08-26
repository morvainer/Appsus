import { EmailPreview } from "../cmps/email-preview.jsx"


export function SentMailList({ emails }) {
   
    // if(!emails) return <h1>No emails</h1>
    // console.log('emails in email-list', emails);
    return (
        <ul className="sent-mail-list">
        <li className="sent-mail-list-li">
           {emails.map((email) => (
        <EmailPreview key={email.id} email={email} />
      ))}
        </li>
        </ul>
    )
    }
