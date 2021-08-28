const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
import { BookApp } from './pages/BookApp.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { BookAppHeader } from './cmps/BookAppHeader.jsx';
import { BookDetails } from './pages/BookDetails.jsx';
import { BookAdd } from './pages/BookAdd.jsx';
import { UserMsg } from './cmps/UserMsg.jsx';

// Simple React Component
export function BooksApp() {
  return (
    <Router>
      <div>
        <header>
          <BookAppHeader />
        </header>
        <main>
          <Switch>
            <Route path='/books/book/:bookId' component={BookDetails} />
            <Route path='/books/bookAdd' component={BookAdd} />
            <Route path='/books' component={BookApp} />
            {/* <Route path='/books/about' component={About} /> */}
            {/* <Route path='/books/' component={Home} /> */}
          </Switch>
          <UserMsg />
        </main>
      </div>
    </Router>
  );
}
