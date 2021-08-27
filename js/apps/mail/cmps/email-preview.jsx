const { Link } = ReactRouterDOM

export function EmailPreview ({email}) {

    // const getTextToShow = (text) => {
        
    // }
// console.log('email in preview',email);
   

    return (
        <article className={`email-preview  ${email.isRead? 'bold' : ''}`}>
        {/* <article className={`email-preview  ${email.isRead && 'bold'}`}> */}
            {/* {console.log('email in email-preview is', email)} */}
            <div className="email-preview-div"> Name: {email. fromName} </div> 
            <div className="email-preview-div"> Subject: {email.subject}</div>
            <div className="email-preview-div"> Date: {email.sentAt}</div>
            {/* <Link to={`/email/${email.id}`} >Email Details</Link>  */}
        </article>
    )

}