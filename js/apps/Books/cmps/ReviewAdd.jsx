import { bookService } from '../services/book.service.js';
import { utilService } from '../services/util.service.js';
import { ReviewsList } from './ReviewsList.jsx';
import { StarRating } from './StarRating.jsx';

export class ReviewAdd extends React.Component {
  state = {
    review: {
      id: utilService.makeId(),
      name: '',
      rate: 0,
      text: '',
    },
    listOfReviews: null,
  };

  componentDidMount() {
    const id = this.props.bookId;
    if (!id) return;
    bookService.getReviews(id).then((reviews) => {
      this.setState({ listOfReviews: reviews });
    });
  }

  handleDeleteReview = (id) => {
    const bookId = this.props.bookId;
    if (!id) return;
    bookService
      .deleteReview(bookId, id)
      .then(() => bookService.getReviews(bookId))
      .then((reviews) => {
        this.setState({ listOfReviews: reviews });
      });
  };

  onSubmitReview = (ev) => {
    ev.preventDefault();
    const id = this.props.bookId;
    const { review } = this.state;
    bookService
      .addReview(id, review)
      .then(() => bookService.getReviews(id))
      .then((reviews) => {
        this.setState({ listOfReviews: reviews });
      });
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === 'number' ? +target.value : target.value;
    this.setState((prevState) => ({
      review: { ...prevState.review, [field]: value },
    }));
  };

  setRate = (rate) => {
    this.setState((prevState) => ({
      review: { ...prevState.review, ['rate']: rate },
    }));
  };

  render() {
    const { id, name, rate, text } = this.state.review;
    const { listOfReviews } = this.state;
    if (!listOfReviews) return <div>Loading...</div>;
    // if(!listOfReviews.length) return <div>No Reviews!</div>
    return (
      <form className='review' onSubmit={this.onSubmitReview}>
        <ReviewsList
          reviews={listOfReviews}
          handleDelete={this.handleDeleteReview}
        />

        <h1 className='leave-review-title'>Leave a review!</h1>
        <label htmlFor='username'>Name:</label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={this.handleChange}
        />
        {/* <select name='rate' id='rate' value={rate} onChange={this.handleChange}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select> */}
        <StarRating rate={this.setRate} handleChange={this.handleChange} />

        <label htmlFor='review'>Review:</label>
        <textarea
          name='text'
          value={text}
          rows='4'
          onChange={this.handleChange}
        />
        <button className='add-review-btn'>Add Review</button>
      </form>
    );
  }
}
