import { EmailList } from "./email-list.jsx"
import { emailService } from "../services/email.service.js"

// const Router = ReactRouterDOM.HashRouter;
// const { Route, Switch, Aside } = ReactRouterDOM;


export class EmailApp extends React.Component {


  state = {
      emails: []

  }

  componentDidMount() {
    this.loadEmails();
    // console.log('books:', this.state.books);
}
  // getTextToShow = (text) => {
      
  // }
  loadEmails = () => {
    emailService.query().then((emails) => {
        this.setState({ emails }, () => { console.log('emails', emails) })
    });
}; 



  render() {
    const { emails } = this.state;
    return (
      <div className="email-app">
        <section>This is my email app</section>
        <EmailList emails={emails}/>
        <h2>This is section after email list</h2>
       
      </div>
    );
  }
}
