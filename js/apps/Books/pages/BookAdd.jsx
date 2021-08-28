import { Loader } from '../cmps/Loader.jsx';
import { bookService } from '../services/book.service.js';
import { eventBusService } from '../services/event-bus-service.js';

export class BookAdd extends React.Component {
  state = {
    search: '',
    bookList: [],
  };

  handleInputChange = ({ target }) => {
    const value = target.type === 'number' ? +target.value : target.value;
    this.setState({ search: value });
    bookService.getBooksFromApi(value).then((books) => {
      this.setState({ bookList: books });
    });
  };

  onAddBook = (book) => {
    bookService.addBook(book);
    eventBusService.emit('user-msg', {
      txt: `Book added successfully!`,
      bookId: book.id,
      type: 'success',
    });
  };

  render() {
    const { search, bookList } = this.state;
    if (!bookList) return <Loader />;
    return (
      <div className='book-add'>
        <h1>Add a book</h1>
        <input
          type='text'
          placeholder='Search'
          value={search}
          onChange={this.handleInputChange}
        />
        <ul className='api-books-list'>
          {bookList.map((book, idx) => {
            return (
              <li key={book.id}>
                {book.volumeInfo.title}{' '}
                <button
                  className='add-book'
                  onClick={() => this.onAddBook(book)}
                >
                  ➕
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
