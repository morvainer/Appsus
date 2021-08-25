const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

import { AppHeader } from './js/cmps-general/app-header.jsx';
import { Home } from './js/pages-general/app-home.jsx';
import { EmailApp } from './js/apps/mail/pages/email-app.jsx';
import { NoteApp } from './js/apps/keep/pages/note-app.jsx';

export function App() {
  return (
    <Router>
      <header>
        <AppHeader />
      </header>
      <main>
        <Switch>
          <Route path='/note' component={NoteApp} />
          <Route path='/email' component={EmailApp} />
          <Route path='/' component={Home} />
        </Switch>
        {/* <UserMsg /> */}
      </main>
      {/* <Footer /> TODO */}
    </Router>
  );
}
