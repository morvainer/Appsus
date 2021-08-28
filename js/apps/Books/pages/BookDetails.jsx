const { Link } = ReactRouterDOM;

import { LongTxt } from '../cmps/LongTxt.jsx';
import { bookService } from '../services/book.service.js';
import { utilService } from '../services/util.service.js';
import { ReviewAdd } from '../cmps/ReviewAdd.jsx';

export class BookDetails extends React.Component {
  // ({ book, onUnSelectBook })
  state = {
    book: null,
  };

  componentDidMount() {
    this.loadBook();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log();
    if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
      this.loadBook();
    }
  }

  loadBook = () => {
    const id = this.props.match.params.bookId;
    bookService.getBookById(id).then((book) => {
      if (!book) this.props.history.push('/');
      this.setState({ book });
    });
  };

  pageCountText = () => {
    let str = '';
    const { book } = this.state;
    if (book.pageCount > 500) str = 'Long Reading';
    else if (book.pageCount <= 500 && book.pageCount >= 200)
      str = 'Decent Reading';
    else str = 'Light Reading';
    return str;
  };

  publishedDateText = () => {
    const { book } = this.state;
    let str = '';
    var year = new Date().getFullYear();
    if (year - book.publishedDate <= 1) str = 'New!';
    else if (year - book.publishedDate > 10) str = 'Veteran Book';
    return str;
  };

  getClass = () => {
    const { book } = this.state;
    let className = '';
    if (book.listPrice['amount'] > 150) className = 'red';
    else if (+book.listPrice['amount'] < 20) className = 'green';
    return className;
  };

  onBack = () => {
    this.props.history.push('/book');
  };

  render() {
    const { book } = this.state;
    if (!book) return <div>Loading...</div>;
    return (
      <section className='books-details'>
        <img src={book.thumbnail} />
        <h1>Title: {book.title}</h1>
        <h2> Subtitle: {book.subtitle}</h2>
        <h3>
          {book.authors.length > 1 ? 'Authors' : 'Author'}:{' '}
          {book.authors.join(',')}
        </h3>
        <h3>
          Published Date: {book.publishedDate} - {this.publishedDateText()}
        </h3>
        <h3>Description:</h3>
        <LongTxt text={book.description} />
        <h3>
          Page Count: {book.pageCount} - {this.pageCountText()}
        </h3>
        <h3>categories: {book.categories.join(',')}</h3>
        <h3>language: {book.language}</h3>
        <h3 className={this.getClass()}>
          Price:{' '}
          {book.listPrice['amount'] +
            utilService.getCurrencyIcon(book.listPrice['currencyCode'])}{' '}
        </h3>
        <h3>
          On Sale:{' '}
          {book.listPrice['isOnSale'] ? (
            <img className='on-sale' src='../assets/img/onsale.png' />
          ) : (
            'NO'
          )}
        </h3>
        <button onClick={this.onBack}>Go Back</button>
        <ReviewAdd bookId={book.id} />
        <Link
          className='book-navigation next'
          to={`/books/book/${bookService.getNextBookId(book.id)}`}
        >
          Next Book
        </Link>
        <Link
          className='book-navigation previous'
          to={`/books/book/${bookService.getPreviousBookId(book.id)}`}
        >
          Previous Book
        </Link>
      </section>
    );
  }
}
