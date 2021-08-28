export function Review({ review, handleDelete }) {
  return (
    <article className='book-review'>
      <h4>Name: {review.name}</h4>
      <h4>Review: {review.text}</h4>
      <div>
        {review.rate >= 1 && <span className='star'>&#9733;</span>}
        {review.rate >= 2 && <span className='star'>&#9733;</span>}
        {review.rate >= 3 && <span className='star'>&#9733;</span>}
        {review.rate >= 4 && <span className='star'>&#9733;</span>}
        {review.rate >= 5 && <span className='star'>&#9733;</span>}
      </div>
      <span className='remove-review' onClick={() => handleDelete(review.id)}>
        X
      </span>
    </article>
  );
}
