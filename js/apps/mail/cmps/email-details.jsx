const { Link } = ReactRouterDOM

import { emailService } from '../services/email.service.js'
import { eventBusService } from '../../../services-general/event-bus-service.js'



export class EmailDetails extends React.Component {


    state = {
        emailId: this.props.match.params.emailId,
        currEmail: null,
        countReadMails: 0

    }
    componentDidMount() {
        // console.log(this.props.match.params.emailId);
        // console.log(this.state.emailId);
        this.getEmailByID();
        this.updateIsRead();
        // console.log('currEmail is: ', this.state.currEmail);



    }
 updateIsRead =() =>{
    emailService.updateEmailIsRead(this.state.emailId)

 }

//  .then((count)=>{this.setState({countReadMails: count})})
//     .then(()=>{console.log('this.state.countReadMails: ', this.state.countReadMails);})
//     .then(()=>{
//         eventBusService.emit('readMailsCount', this.state.countReadMails)
//     }).then(()=>{console.log('this.state.countReadMails2: ', this.state.countReadMails);})
// //  this.setState({countReadMails: count})
//  this.state.countReadMails +1
    // isRead = () => {
    //     this.setState((prevState) => ({
    //         currEmail: { ...prevState.currEmail, isRead: !prevState.currEmail.isRead },
    //     }))


    // }

    // () => { console.log('is read true?', this.state.currEmail) }

    //   isRead2 = () => {  
    //     this.setState(prevState => ({ isRead: !prevState.isRead }), ()=>{console.log('is read?', this.state.isRead)})

    //   }
    onBack = () => {
        this.props.history.push('/email/inbox')
    }
    onDeleteEmail = () => {
        console.log('deleting mail');
        console.log(this.state.emailId);
        emailService.deleteEmail(this.state.emailId).then(this.onBack)
    }
    getEmailByID = () => {

        emailService.getEmailById(this.state.emailId).then((currEmail) => {
            this.setState({ currEmail });
            console.log(currEmail);
            // const isRead = currEmail.isRead
            // console.log('isRead is', isRead);
            // this.isRead();
            //   this.setState({currEmail, [isRead]: true});
            //   console.log('isRead2 is', isRead);
            // this.isRead();
        })
    }

    render() {
        const { currEmail } = this.state;
        if (!currEmail) return <h2>Loading...</h2>
        return (
            <div className="email-details-div">
              
                <div className="email-det-title"> {currEmail.subject}</div>
                <div className="email-det-from">From: {currEmail. fromName} ({currEmail.fromEmail})</div>
                {/* <div>{currEmail.fromEmail}</div> */}
                <div className="email-det-message"> {currEmail.message}</div>
                <button className="del-btn-emaildetails" onClick={() => this.onDeleteEmail()}>Delete Email </button>
               <button className="back-btn-emaildetails"> <Link to={`/email/inbox`} ><span>go back</span></Link> </button>
            </div>
        )
    }
}
