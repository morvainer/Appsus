import { eventBusService } from '../services/event-bus-service.js';

const { NavLink, withRouter } = ReactRouterDOM;

class _BookAppHeader extends React.Component {
  render() {
    return (
      <section className='app-header-books'>
        <h1>BooksApp</h1>
        <nav>
          {/* <NavLink exact to='/'>
            Home
          </NavLink> */}
          {/* <NavLink to='/books/about'>About</NavLink> */}
          <NavLink to='/books/bookAdd'>Add a book</NavLink>
          <NavLink to='/books'>Books</NavLink>
        </nav>
      </section>
    );
  }
}
export const BookAppHeader = withRouter(_BookAppHeader);
