import { eventBusService } from "../../../services-general/event-bus-service.js";

const { Link } = ReactRouterDOM


export class Aside extends React.Component{

    state = {
      readEmailcount: 0
      };

      removeEventBus;
      componentDidMount() {
        this.removeEventBus =  eventBusService.on('readMailsCount', (countEmailsread) => {
            this.setState({  readEmailcount: countEmailsread })
          })
      }
      
      render() {
        const { toggleCompose, closeModal } = this.props;
        const { readEmailcount } = this.state;
    return(

        <aside className="aside">
            <div className="aside-btn"><button onClick={toggleCompose}>Compose Email</button></div>
            {/* <div className="aside-link">Inbox</div> */}
            <Link to={`/email`} onClick={closeModal}>Inbox({readEmailcount})</Link>
            <div className="aside-link">Starred</div>
            <div className="aside-link">Sent Mail</div>
            {/* <div className="aside-link" ><button onClick={toggleMailsSent}>Sent Mail</button></div> */}
            {/* <Link to={`/email/sentmails`} >Sent Emails</Link>   */}
            <div className="aside-link">Drafts</div>
        </aside>
        
        
        ) 

    }
}