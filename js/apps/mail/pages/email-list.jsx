import { EmailPreview } from "../cmps/email-preview.jsx"
const { Link } = ReactRouterDOM

export function EmailList({ emails }) {

  return (
    <ul className="email-list">

      {emails.map((email) => (
        <li key={email.id} className={`email-list-li`}>
          <Link className="preview-link email-details" to={`/email/folder/${email.id}`} >
            <EmailPreview key={email.id} email={email} /></Link> </li>
      ))}

    </ul>
  )
}


