
export class EmailFilter extends React.Component {

    state = {
        filterBy: {
            search: '',
            emailsReadFilter: ''// recieves read/unRead
        }

    };

    

    componentDidMount() {
        
        
       
      }

    handleChange = (ev) => {
        const field = ev.target.name;//input name//'search'// name is name in select
        // console.log('ev.target.name',ev.target.name);
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value;// what the user writes
        // console.log('value', value);
        // console.log('field', field );
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filterBy)
            // console.log('this.state.filterBy', this.state.filterBy);
        });
    };
  


    onFilter = (ev) => {
        // console.log('onFilter');
        ev.preventDefault();// dont need?
        this.props.onSetFilter(this.state.filterBy)
    }




    render() {
        // console.log('RENDERED Filter');
        const { search, emailsReadFilter} = this.state.filterBy;
        return (
            <form className='email-filter' onSubmit={this.onFilter}>
                <label htmlFor='search'></label>
                <input  name='search' id='search' type='text' placeholder='search' value={search} onChange={()=>{this.handleChange(event)}}/>
                <h3>Filter by</h3>
                <select name="emailsReadFilter" value={emailsReadFilter.value} onChange={()=>{this.handleChange(event)}}>
                        <option value="all">all</option>
                        <option value="read">read</option>
                        <option value="unRead">Unread</option>
                        
                    </select>
            </form>
        )

    }

}