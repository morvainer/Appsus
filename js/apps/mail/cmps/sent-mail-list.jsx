import { EmailPreview } from "../cmps/email-preview.jsx"


export function SentMailList({ emails, viewMail }) {
  return (
    <ul className="sent-mail-list">
      <li className="sent-mail-list-li">
        {emails.map((email) => (
          <EmailPreview key={email.id} email={email} onClick={viewMail} />
        ))}
      </li>
    </ul>
  )
}
