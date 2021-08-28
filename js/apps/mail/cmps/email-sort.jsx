export class EmailSort extends React.Component {

    state = {
        sortBy: {
            sortEmails: '',
        }
    };

    componentDidMount() {

    }

    sortEmails = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState((prevState) => ({ sortBy: { ...prevState.sortBy, [field]: value } }), () => {
            this.props.onSetSort(this.state.sortBy)
        });
    };

    onSort = (ev) => {
        ev.preventDefault();
        this.props.onSetSort(this.state.sortBy)
    }

    render() {
        const { sortEmails } = this.state.sortBy;
        return (
            <form className='email-sort' onSubmit={this.onSort}>

                <select name="sortEmails" value={sortEmails.value} onChange={() => { this.sortEmails(event) }}>
                    <option value="date">Date</option>
                    <option value="subject">Subject</option>
                </select>
            </form>
        )

    }

}