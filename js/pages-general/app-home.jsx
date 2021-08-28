const { Link } = ReactRouterDOM;

export function Home() {
  return (
    <section className='home'>
      <h1>Welcome to my Appsus</h1>
      <div className='home-icons-container'>
        <Link to={`/email/inbox`}>
          <i className='fas fa-envelope mail-icon'></i>
        </Link>
        <Link to='/note'>
          <i className='fas fa-sticky-note note-icon'></i>
        </Link>
        <Link to='/books'>
          <i className='fas fa-book book-icon'></i>
        </Link>
      </div>
    </section>
  );
}
