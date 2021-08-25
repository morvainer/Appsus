import { EmailList } from "../js/apps/mail/cmps/email-list.jsx"
// const Router = ReactRouterDOM.HashRouter;
const { Route, Switch, Aside } = ReactRouterDOM;


export class EmailApp extends React.Component {


  state = {
      emails: []

  }

  componentDidMount() {
    // this.loadEmails();
    // console.log('books:', this.state.books);
}
  // getTextToShow = (text) => {
      
  // }




  render() {
    return (
      <div className="email-app">
        <h1>This is my email app</h1>
        <EmailList/>
        <h2>asdfafd</h2>
        <Aside />
        <Switch>
          <Route />
          <Route />
          <Route component={EmailDetails} path='/email/:emailsId' />
          <Route component={EmailList} path='/email' />
        </Switch>
      </div>
    );
  }
}
