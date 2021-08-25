import { EmailList } from "../js/apps/mail/cmps/email-list.jsx"



export class EmailApp extends React.Component {


  state = {
      

  }

  getTextToShow = (text) => {
      
  }




  render() {
    return (
      <div className="email-app">
        <h1>This is my email app</h1>
        <h2>asdfafd</h2>
<<<<<<< HEAD
        <Aside />
        <Switch>
          <Route />
          <Route />
          <Route component={EmailDetails} path='/email/:emailsId' />
          <Route component={MailList} path='/email' />
        </Switch>
=======
        <EmailList/>
>>>>>>> 277c02b261bf592b1b4384115b859cdbb17ab8a0
      </div>
    );
  }
}
