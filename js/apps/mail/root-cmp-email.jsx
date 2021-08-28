import { EmailCompose } from "./cmps/email-compose.jsx";
import { EmailApp } from "./pages/email-app.jsx";
import { Aside } from './cmps/aside.jsx'
import { EmailDetails } from './cmps/email-details.jsx'

const { Route, Switch } = ReactRouterDOM;


export class RootCmpEmail extends React.Component {

  state = {
    isComposeShown: false,
  }


  toggleModal = () => {
    this.setState(prevState => ({ isComposeShown: !prevState.isComposeShown }))
  }
  closeModal = () => {
    this.setState({ isComposeShown: false })
  }


  render() {
    const { isComposeShown } = this.state;

    return (
      <main className="flex main-layout">
        <Aside toggleCompose={this.toggleModal} className="aside-root" closeModal={this.closeModal} />
        {isComposeShown && <EmailCompose toggleCompose={this.toggleModal} />}
        <Switch>
          <Route path='/email/:folder/:emailId' component={EmailDetails} />
          <Route isComposeShown={isComposeShown} component={EmailApp} className="email-app-root" path='/email/:folder' />
          <Route isComposeShown={isComposeShown} component={EmailApp} className="email-app-root" path='/email' />
        </Switch>
      </main>

    );
  }
}