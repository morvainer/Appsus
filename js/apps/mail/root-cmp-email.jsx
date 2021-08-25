// const Router = ReactRouterDOM.HashRouter;
const { Route, Switch, Aside } = ReactRouterDOM;

import { EmailDetails } from '../js/apps/mail/pages/email-details.jsx';
import {EmailList } from '../js/apps/mail/pages/email-list.jsx';
import { EmailApp } from '../js/apps/mail/pages/email-app.jsx';
// import { NoteApp } from './js/apps/keep/pages/note-app.jsx';

export function RootCmpEmail() {
  return (
   
      <main>
      <Aside />
        <Switch>
          {/* <Route component={EmailDetails} path='/email/details' /> */}
          <Route component={EmailList} path='/email/list' />
          {/* <Route component={EmailApp} path='/email/app'  /> */}
        </Switch>
      </main>
    
  );
}

// :emailId