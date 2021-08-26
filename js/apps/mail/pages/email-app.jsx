import { EmailList } from "./email-list.jsx"
import { emailService } from "../services/email.service.js"

// const Router = ReactRouterDOM.HashRouter;
// const { Route, Switch, Aside } = ReactRouterDOM;

export class EmailApp extends React.Component {

  state = {
    emails: null,
    selectedEmail: null,

  };

  componentDidMount() {
    this.loadEmails();
    // console.log('books:', this.state.books);
  }
  // getTextToShow = (text) => {

  // }
  loadEmails = () => {
    emailService.query().then((emails) => {
      this.setState({ emails }, () => { console.log('emails in load emails', emails) })
    });
  };

  onAddEmail = () => {
    emailService.addEmail();
  }
  
  // toggleMailsSent = () => {
  //   this.setState(prevState => ({  isMailSentShown: !prevState. isMailSentShown }))
  // }

  render() {
    const { emails } = this.state;
    const { isComposeShown, isMailSentShown } = this.props;
    if (!emails) return <h2>Loading...</h2>

    return (
      <div className="email-app ">
        <section>This is my email app</section>
        {/* <button onClick={this.onAddEmail} >Add Email</button> */}
        {/* <Link to="/email/addEmail">Add Email </Link> */}
        {/* {console.log('email in render are:', emails)} */}

        <EmailList emails={emails} isComposeShown={isComposeShown} />
        {/* {isMailSentShown &&<SentMailList emails={emails}/>} */}
        <h2>This is section after email list</h2>

      </div>
    );
  }
}
