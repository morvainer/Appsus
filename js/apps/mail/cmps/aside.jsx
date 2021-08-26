const { Link } = ReactRouterDOM

export function Aside({toggleCompose, toggleMailsSent}){

    return(

        <aside className="aside">
            <div className="aside-btn"><button onClick={toggleCompose}>Compose Email</button></div>
            <div className="aside-link">Inbox</div>
            <div className="aside-link">Starred</div>
            <div className="aside-link">Sent Mail</div>
            {/* <div className="aside-link" ><button onClick={toggleMailsSent}>Sent Mail</button></div> */}
            {/* <Link to={`/email/sentmails`} >Sent Emails</Link>   */}
            <div className="aside-link">Drafts</div>
        </aside>
        
        
        ) 

    
}