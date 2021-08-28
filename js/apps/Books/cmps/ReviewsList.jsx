import { bookService } from '../services/book.service.js';
import { Review } from './Review.jsx';

export function ReviewsList({ reviews, handleDelete }) {
  return (
    <div className='reviews-list'>
      <h1>Reviews:</h1>
      {reviews.map((review) => (
        <Review key={reviews.id} review={review} handleDelete={handleDelete} />
      ))}
    </div>
  );
}
