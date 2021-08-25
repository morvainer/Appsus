import { EmailCompose } from "./cmps/email-compose.jsx";
import { EmailApp } from "./pages/email-app.jsx";
import { Aside } from './cmps/aside.jsx'

const { Route, Switch } = ReactRouterDOM;


export class RootCmpEmail extends React.Component {

  state = {
    isComposeShown: false
  }


  toggleModal = () => {
    this.setState(prevState => ({ isComposeShown: !prevState.isComposeShown }))
  }

  render() {

    return (

      <main>
        <Aside toggleCompose={this.toggleModal} />
        {this.state.isComposeShown && <EmailCompose />}
        <Switch>
          {/* <Route component={EmailDetails} path='/email/details' /> */}
          {/* <Route component={EmailList} path='/email/list' /> */}
          <Route component={EmailApp} path='/email' />
        </Switch>
      </main>

    );
  }
}