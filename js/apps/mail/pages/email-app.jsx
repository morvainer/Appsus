<<<<<<< HEAD
import { EmailList } from '../js/apps/mail/cmps/email-list.jsx';
=======
import { EmailList } from "./email-list.jsx"
import { emailService } from "../services/email.service.js"

>>>>>>> 5a092e8833a6dc00f0939a8bdf56a420a372a248
// const Router = ReactRouterDOM.HashRouter;
// const { Route, Switch, Aside } = ReactRouterDOM;

<<<<<<< HEAD
=======

>>>>>>> 5a092e8833a6dc00f0939a8bdf56a420a372a248
export class EmailApp extends React.Component {

<<<<<<< HEAD
=======

>>>>>>> 5a092e8833a6dc00f0939a8bdf56a420a372a248
  state = {
    emails: [],
  };

  componentDidMount() {
    this.loadEmails();
    // console.log('books:', this.state.books);
  }
  // getTextToShow = (text) => {
<<<<<<< HEAD

  // }

=======
      
  // }
  loadEmails = () => {
    emailService.query().then((emails) => {
        this.setState({ emails }, () => { console.log('emails', emails) })
    });
}; 



>>>>>>> 5a092e8833a6dc00f0939a8bdf56a420a372a248
  render() {
    const { emails } = this.state;
    return (
<<<<<<< HEAD
      <div className='email-app'>
        <h1>This is my email app</h1>
        <EmailList />
        <h2>asdfafd</h2>
        <Aside />
        <Switch>
          <Route />
          <Route />
          <Route component={EmailDetails} path='/email/:emailsId' />
          <Route component={EmailList} path='/email' />
        </Switch>
=======
      <div className="email-app">
        <section>This is my email app</section>
        <EmailList emails={emails}/>
        <h2>This is section after email list</h2>
       
>>>>>>> 5a092e8833a6dc00f0939a8bdf56a420a372a248
      </div>
    );
  }
}
