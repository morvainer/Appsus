export class BookFilter extends React.Component {
  state = {
    filterBy: {
      name: '',
      minPrice: '',
      maxPrice: '',
    },
  };

  handleChange = (ev) => {
    const field = ev.target.name;
    const value =
      ev.target.type === 'number' ? +ev.target.value : ev.target.value;
    this.setState(
      { filterBy: { ...this.state.filterBy, [field]: value } },
      () => {
        this.props.onSetFilter(this.state.filterBy);
      }
    );
  };

  onFilter = (ev) => {
    ev.preventDefault();
    this.props.onSetFilter(this.state.filterBy);
  };

  render() {
    const { name, minPrice, maxPrice } = this.state.filterBy;
    return (
      <form className='book-filter' onSubmit={this.onFilter}>
        <label htmlFor='by-name'>By Name:</label>
        <input
          name='name'
          id='by-name'
          type='text'
          placeholder='Name'
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor='min-price'>Min Price:</label>
        <input
          name='minPrice'
          id='min-price'
          type='number'
          placeholder='Min Price'
          value={minPrice}
          onChange={this.handleChange}
        />
        <label htmlFor='max-price'>Max price:</label>
        <input
          name='maxPrice'
          id='max-price'
          type='number'
          placeholder='Max Price'
          value={maxPrice}
          onChange={this.handleChange}
        />
        <button>Filter</button>
      </form>
    );
  }
}
