const { Link } = ReactRouterDOM
import { emailService } from '../services/email.service.js' 

export class EmailCompose extends React.Component {

    state = {
        to: '',
        cc: '',
        bcc: '',
        subject:'',
        message: '',
        
    }
    componentDidMount() {
       
      }

      handleChange = ({ target }) => {
        const field = target.name
        this.setState(prevState => ({ ...prevState, [field]: target.value }))
    }

    toggleModal = () => {
        this.setState(prevState => ({ isComposeShown: !prevState.isComposeShown }))
      }
      onBack = () => {
        this.props.history.push('/book')
    }
      onAddEmail = (ev) =>{
          ev.preventDefault();
          const { to, cc, bcc, subject, message } = this.state;
        console.log(to, cc, bcc, subject, message);
        emailService.addEmail(to, cc, bcc, subject, message);
      }
    render() {
        const { to, cc, bcc, subject, message } = this.state;
        return (
            
            <form className="email-compose" onSubmit={(event)=>{this.onAddEmail(event)}}>
                <h1>New Message</h1>
                    <label htmlFor="to" >To:</label>
                    <input type="text" name="to" id="to"  value={to} onChange={this.handleChange} />
                    <label htmlFor="cc" >Cc:</label>
                    <input type="text" name="cc" id="cc"  value={cc} onChange={this.handleChange} />
                    <label htmlFor="bcc" >Bcc:</label>
                    <input type="text" name="bcc" id="bcc" value={bcc} onChange={this.handleChange} />
                    <label htmlFor="subject" >Subject:</label>
                    <input type="text" name="subject" id="subject" value={subject} onChange={this.handleChange} />
                    <label htmlFor=" message" >Message:</label>
                    <textarea id=" message" name="message" value={message} rows="4" cols="50" onChange={this.handleChange} >
                        
                    </textarea>
                    <button>Send</button>
                    {/* <div onClick={this.toggleModal}> go back </div> */}
                    {/* <a href="#" onClick={this.onBack}>go back</a> */}
                    {/* <Link to={`/email`}>Go Back</Link> */}
                </form>
        )
    }
}