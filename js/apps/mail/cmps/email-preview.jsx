

export function EmailPreview ({email}) {

    // const getTextToShow = (text) => {
        
    // }

   

    return (
        <article className="email-preview">
            {/* {console.log('email in email-preview is', email)} */}
            <div className="email-preview-div"> Name: {email.name} </div> 
            <div className="email-preview-div"> Title: {email.title}</div>
           
        </article>
    )

}