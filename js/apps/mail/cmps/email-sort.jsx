export class EmailSort extends React.Component {

    state = {
        sortBy: {
            sortEmails: '',
           
        }

    };

    

    componentDidMount() {
        
        
       
      }

    sortEmails = (ev) => {
        const field = ev.target.name;//select name//'sortEmails'
        console.log('ev.target.name',ev.target.name);
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value;// what the user writes
        console.log('value', value);
        console.log('field', field );
        this.setState((prevState) => ({ sortBy: { ...prevState.sortBy, [field]: value } }), () => {
            this.props.onSetSort(this.state.sortBy)
            console.log('this.state.sortBy', this.state.sortBy);
        });
    };
  


    onSort = (ev) => {
        ev.preventDefault();// dont need?
        this.props.onSetFilter(this.state.sortBy)
    }




    render() {
        const { sortEmails} = this.state.sortBy;
        return (
            <form className='email-sort' onSubmit={this.onSort}>
               
                <select name="sortEmails" value={sortEmails.value} onChange={()=>{this.sortEmails(event)}}>
                        <option value="subject">Subject</option>
                        <option value="date">Date</option>
                        
                        
                    </select>
            </form>
        )

    }

}