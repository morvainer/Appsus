// import { eventBusService } from '../services/event-bus-service.js';

const { NavLink, withRouter } = ReactRouterDOM;

class _AppHeader extends React.Component {
  render() {
    return (
      <section className='app-header'>
        <h1>Appsus</h1>
        <nav>
          <NavLink exact to='/'>
            Home
          </NavLink>
          <NavLink to='/email'>Mail</NavLink>
          <NavLink to='/note'>Note App</NavLink>
          {/* <NavLink to='/book'>Book</NavLink> */}
          {/* <NavLink to='/about'>About</NavLink> */}
        </nav>
      </section>
    );
  }
}
export const AppHeader = withRouter(_AppHeader);