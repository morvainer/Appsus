export class StarRating extends React.Component {
  state = {
    rating: '',
    hover: '',
  };

  setRating = (idx) => {
    this.setState({ rating: idx });
  };

  setHover = (rate) => {
    this.setState({ hover: rate });
  };

  render() {
    const { rating, hover } = this.state;
    return (
      <div className='stars-rating'>
        {[...Array(5)].map((star, idx) => {
          idx += 1;
          return (
            <label
              type='button'
              key={idx}
              className={idx <= (hover || rating) ? 'on' : 'off'}
              onClick={() => this.setRating(idx)}
              onMouseEnter={() => this.setHover(idx)}
              onMouseLeave={() => this.setHover(rating)}
            >
              <span className='star'>&#9733;</span>
            </label>
          );
        })}
      </div>
    );
  }
}
