const { Link } = ReactRouterDOM
import { LongTxt } from "../../../cmps-general/LongTxt.jsx"

export function EmailPreview ({email}) {

    // const getTextToShow = (text) => {
        
    // }
// console.log('email in preview',email);
   

    return (
        <div className={`email-preview  ${(!email.isRead) && email.status==='inbox'? 'not-read' : 'mail-read'} 
         ${(email.status==='sent')? 'sent-mail' : ''}`}>
        {/* <article className={`email-preview  ${email.isRead && 'bold'}`}> */}
            {/* {console.log('email in email-preview is', email)} */}
            <div className="email-preview-div email-prev-from">  {email. fromName} </div> 
            <div className="email-preview-div email-prev-subject">{email.subject} - </div>
            <div className="email-preview-div email-prev-message">  
            <LongTxt text={email.message} />
            </div>
            <div className="email-preview-div email-prev-date">  {email.sentAt}</div>
            {/* <Link to={`/email/${email.id}`} >Email Details</Link>  */}
        </div>
    )

}