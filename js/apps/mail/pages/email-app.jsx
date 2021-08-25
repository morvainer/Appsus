<<<<<<< HEAD
import { EmailList } from '../js/apps/mail/cmps/email-list.jsx';
=======
import { EmailList } from "../js/apps/mail/cmps/email-list.jsx"
// const Router = ReactRouterDOM.HashRouter;
const { Route, Switch, Aside } = ReactRouterDOM;

>>>>>>> a98399b2bf3ca57e5febb87f23d5148828a94745

export class EmailApp extends React.Component {
  state = {};

<<<<<<< HEAD
  getTextToShow = (text) => {};
=======

  state = {
      emails: []

  }

  componentDidMount() {
    // this.loadEmails();
    // console.log('books:', this.state.books);
}
  // getTextToShow = (text) => {
      
  // }



>>>>>>> a98399b2bf3ca57e5febb87f23d5148828a94745

  render() {
    return (
      <div className='email-app'>
        <h1>This is my email app</h1>
        <EmailList/>
        <h2>asdfafd</h2>
<<<<<<< HEAD
        <EmailList />
=======
        <Aside />
        <Switch>
          <Route />
          <Route />
          <Route component={EmailDetails} path='/email/:emailsId' />
          <Route component={EmailList} path='/email' />
        </Switch>
>>>>>>> a98399b2bf3ca57e5febb87f23d5148828a94745
      </div>
    );
  }
}
