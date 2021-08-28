import { EmailPreview } from "../cmps/email-preview.jsx"
const { Link } = ReactRouterDOM

export function EmailList({emails}) {
   
    // if(!emails) return <h1>No emails</h1>
    // console.log('emails in email-list', emails);
    return (
        <ul className="email-list">
      
           {emails.map((email) => (
         <li key={email.id} className={`email-list-li`}> 
          <Link className="preview-link" to={`/email/folder/${email.id}`} >
             <EmailPreview key={email.id} email={email} /></Link> </li>
      ))}
        
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

    