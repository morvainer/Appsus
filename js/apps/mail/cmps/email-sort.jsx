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
        // console.log('ev.target.name',ev.target.name);
        const value =  ev.target.value;// what the user writes
        // console.log('value', value);
        // console.log('field', field );
        this.setState((prevState) => ({ sortBy: { ...prevState.sortBy, [field]: value } }), () => {
            this.props.onSetSort(this.state.sortBy)
            // console.log('this.state.sortBy', this.state.sortBy);
        });
    };
  


    onSort = (ev) => {
        // console.log('onSort');
        ev.preventDefault();// dont need?
        this.props.onSetSort(this.state.sortBy)
    }




    render() {
        // console.log('RENDERED sort');
        const { sortEmails} = this.state.sortBy;
        return (
            <form className='email-sort' onSubmit={this.onSort}>
               
                <select name="sortEmails" value={sortEmails.value} onChange={()=>{this.sortEmails(event)}}>
                        {/* <option value="none">None</option> */}
                        <option value="date">Date</option>
                        <option value="subject">Subject</option>
                        
                        
                    </select>
            </form>
        )

    }

}