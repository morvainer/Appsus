const { Link } = ReactRouterDOM

export function EmailPreview ({email}) {

    // const getTextToShow = (text) => {
        
    // }

   

    return (
        <article className="email-preview">
            {/* {console.log('email in email-preview is', email)} */}
            <div className="email-preview-div"> Name: {email.from} </div> 
            <div className="email-preview-div"> Subject: {email.subject}</div>
            <div className="email-preview-div"> Date: {email.sentAt}</div>
            {/* <Link to={`/email/${email.id}`} >Email Details</Link>  */}
        </article>
    )

}