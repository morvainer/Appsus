
export class EmailFilter extends React.Component {

    state = {
        filterBy: {
            search: '',
            emailsReadFilter: ''
        }
    };
    componentDidMount() {

    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value;// what the user writes
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filterBy)
        });
    };

    onFilter = (ev) => {
        ev.preventDefault();
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const { search, emailsReadFilter } = this.state.filterBy;
        return (
            <form className='email-filter' onSubmit={this.onFilter}>
                <label htmlFor='search'></label>
                <input name='search' id='search' type='text' placeholder='search' value={search} onChange={() => { this.handleChange(event) }} />
                <h3>Filter by</h3>
                <select name="emailsReadFilter" value={emailsReadFilter.value} onChange={() => { this.handleChange(event) }}>
                    <option value="all">all</option>
                    <option value="read">read</option>
                    <option value="unRead">Unread</option>
                </select>
            </form>
        )

    }

}