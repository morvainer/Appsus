import { bookService } from '../services/book.service.js';
import { BookList } from '../cmps/BookList.jsx';
import { BookDetails } from '../pages/BookDetails.jsx';
import { BookFilter } from '../cmps/BookFilter.jsx';

export class BookApp extends React.Component {
  state = {
    books: [],
    filterBy: null,
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    bookService.query(this.state.filterBy).then((books) => {
      this.setState({ books });
    });
  };

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadBooks);
  };

  render() {
    const { books } = this.state;
    return (
      <section className='book-app'>
        <BookFilter
          filterBy={this.state.filterBy}
          onSetFilter={this.onSetFilter}
        />
        <BookList onSelectBook={this.onSelectBook} books={books} />
      </section>
    );
  }
}
