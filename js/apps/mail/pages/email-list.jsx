import { EmailPreview } from "../cmps/email-preview.jsx"


export function EmailList({ emails }) {
    // if(!emails) return <h1>No emails</h1>
    // console.log('emails in email-list', emails);
    return (
        <ul className="email-list">
        <li className="email-list-li">
           {emails.map((email) => (
        <EmailPreview key={email.id} email={email} />
      ))}
        </li>
        </ul>
    )
    }


{/*     
    // key={email.id}
    
    // <div>
    //     <EmailPreview/>
    //     <EmailPreview/>
    //     <EmailPreview/>
    // </div> */}