import { EmailPreview } from "../cmps/email-preview.jsx"
const { Link } = ReactRouterDOM

export function EmailList({ emails}) {
   
    // if(!emails) return <h1>No emails</h1>
    // console.log('emails in email-list', emails);
    return (
        <ul className="email-list">
        <li className="email-list-li">
           {emails.map((email) => (
         <Link className="preview-link" key={email.id} to={`/email/${email.id}`} ><EmailPreview key={email.id} email={email}  /></Link> 
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