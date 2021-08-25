import { EmailPreview } from "../cmps/email-preview.jsx"


export function EmailList({ emails }) {
    return (
        <div className="email-list">
           {emails.map((email)=>{<div className="email">{email}</div>})}
        </div>
    )
    }


{/*     
    // key={email.id}
    
    // <div>
    //     <EmailPreview/>
    //     <EmailPreview/>
    //     <EmailPreview/>
    // </div> */}