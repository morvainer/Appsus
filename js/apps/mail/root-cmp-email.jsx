import { EmailCompose } from "./cmps/email-compose.jsx";
import { EmailApp } from "./pages/email-app.jsx";
import { Aside } from './cmps/aside.jsx'
import { SentMailList } from './cmps/sent-mail-list.jsx'

const { Route, Switch } = ReactRouterDOM;


export class RootCmpEmail extends React.Component {

  state = {
    isComposeShown: false,
    // isMailSentShown: false
    
  }


  toggleModal = () => {
    this.setState(prevState => ({ isComposeShown: !prevState.isComposeShown }))
  }

  // toggleMailsSent = () => {
  //   this.setState(prevState => ({  isMailSentShown: !prevState. isMailSentShown }))
  // }

  render() {
    const { isComposeShown } = this.state;

    return (
      <main className="flex main-layout">
        <Aside toggleCompose={this.toggleModal} className="aside-root" />
        {isComposeShown && <EmailCompose />}
        <Switch>
          {/* <Route component={EmailDetails} path='/email/details' /> */}
          {/* <Route component={EmailList} path='/email/list' /> */}
          {/* <Route path="/email/sentmails" component={SentMailList} /> */}
          <Route isComposeShown={isComposeShown} component={EmailApp} className="email-app-root" path='/email' />
        </Switch>
      </main>

    );
  }
}