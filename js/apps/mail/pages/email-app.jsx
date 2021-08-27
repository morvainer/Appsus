import { EmailList } from "./email-list.jsx"
import { emailService } from "../services/email.service.js"
import { eventBusService } from '../../../services-general/event-bus-service.js'
import { EmailFilter } from "../cmps/email-filter.jsx";
import { EmailSort } from "../cmps/email-sort.jsx";

// const Router = ReactRouterDOM.HashRouter;
// const { Route, Switch, Aside } = ReactRouterDOM;

export class EmailApp extends React.Component {

  state = {
    emails: null,
    emailsReadCount: 0,
    filterBy: '', //object
    sortBy: ''
    // selectedEmail: null,
    // unReadEmailsCount: 0,
    // filterBy: ''

  };
 
  componentDidMount() {
    
    this.loadEmails();

    // this.removeEventBus = eventBusService.on('unRead-Emails-Count', (unReadEmailsCount) => {
    //   this.setState({ unReadEmailsCount })
  }
  // console.log('books:', this.state.books);
  // }
  // getTextToShow = (text) => {
  
  // }
  loadEmails = () => {
    // console.log('this.state.filterBy in emailapp', this.state.filterBy);
    emailService.query(this.state.filterBy, this.state.sortBy).then((emails) => {
      this.setState({ emails })
      emailService.countUnreadMails().then((count)=>{
        eventBusService.emit('readMailsCount', count )

      })
    })
    
  }

  
  // loadEmails = () => {
  //   emailService.query(this.state.filterBy).then((emails) => {
  //     eventBusService.emit('unRead-Emails-Count', UnreadMails.length)
  //     this.setState({ emails });
  //   });
  // };

  onAddEmail = () => {
    emailService.addEmail();
  }
  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadEmails);
}
  onSetSort = (sortBy) => {
    this.setState({ sortBy }, this.loadEmails);
}
  // toggleMailsSent = () => {
  //   this.setState(prevState => ({  isMailSentShown: !prevState. isMailSentShown }))
  // }

  render() {
    const { emails, emailsReadCount } = this.state;
    const { isComposeShown, isMailSentShown } = this.props;
    console.log('emails in emailApp', emails);
    if (!emails) return <h2>Loading...</h2>

    return (
      <div className="email-app ">
        <section>Filter by</section>
        <section >
            <EmailFilter onSetFilter={this.onSetFilter} />
            </section>
            <h3>Sort By</h3>
        <section >
            <EmailSort onSetSort={this.onSetSort} />
            </section>
        {/* <button onClick={this.onAddEmail} >Add Email</button> */}
        {/* <Link to="/email/addEmail">Add Email </Link> */}
        {/* {console.log('email in render are:', emails)} */}

        <EmailList emails={emails} />
        {/* {isMailSentShown &&<SentMailList emails={emails}/>} */}
        <h2>This is section after email list</h2>

      </div>
    );
  }
}
