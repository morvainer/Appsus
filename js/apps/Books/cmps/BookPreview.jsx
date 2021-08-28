const { Link } = ReactRouterDOM;

import { utilService } from '../services/util.service.js';

export function BookPreview({ book }) {
  return (
    <article className='book-preview'>
      <img src={book.thumbnail} alt='' />
      <h4>Title: {book.title}</h4>
      <h4>
        Price: {book.listPrice['amount']}
        {utilService.getCurrencyIcon(book.listPrice['currencyCode'])}
      </h4>
      <Link to={`/books/book/${book.id}`}>Book Details</Link>
    </article>
  );
}
