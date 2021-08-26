
export class EmailFilter extends React.Component {

    state = {
        filterBy: {
            status: '',
            isStared: false

        }

    };

    

    componentDidMount() {
        
        
       
      }

    handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value;
        console.log('value', value);
        console.log('field', field );
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filterBy)
        });
    };



    onFilter = (ev) => {
        ev.preventDefault();
        this.props.onSetFilter(this.state.filterBy)
    }




    render() {
        const { status } = this.state.filterBy;
        return (
            <form className='email-filter' onSubmit={this.onFilter}>
                <label htmlFor='by-name'>by name</label>
                <input ref={this.inputRef} name='name' id='book-name' type='text' placeholder='Book Name' value={name} onChange={this.handleChange}/>
                <label htmlFor='by-min-price'>by min price</label>
                <input name='minPrice' id='min-price' type='number' placeholder='min price' value={minPrice} onChange={this.handleChange}/>
                <label htmlFor='by-price'>by max price</label>
                <input name='maxPrice' id='max-price' type='number' placeholder='max price' value={maxPrice} onChange={this.handleChange}/>
            </form>
        )

    }

}