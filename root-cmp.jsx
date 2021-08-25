const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
// import { BookApp } from './pages/BookApp.jsx';
// import { Home } from './pages/Home.jsx';
// import { About } from './pages/About.jsx';
// import { AppHeader } from './js/cmps/AppHeader.jsx';
import { AppHeader } from './js/cmps/app-header.jsx';
// import { BookDetails } from './pages/BookDetails.jsx';
// import { BookAdd } from './pages/BookAdd.jsx';
// import { UserMsg } from './cmps/UserMsg.jsx';
import { Home } from './js/pages/app-home.jsx';

// Simple React Component
export function App() {
  return (
    <Router>
      <header>
        <AppHeader />
      </header>
      <main>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
        {/* <UserMsg /> */}
      </main>
      {/* <Footer /> TODO */}
    </Router>
  );
}
