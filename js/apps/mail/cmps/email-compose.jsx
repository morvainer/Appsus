const { Link } = ReactRouterDOM
import { emailService } from '../services/email.service.js' 

export class EmailCompose extends React.Component {

    state = {
        to: '',
        subject:'',
        message: ''
        
    }
    componentDidMount() {
       
      }

      handleChange = ({ target }) => {
        const field = target.name
        this.setState(prevState => ({ ...prevState, [field]: target.value }))
    }

    
      onBack = () => {
        // this.props.history.push('/email/inbox')
    }
      onAddEmail = (ev) =>{
          ev.preventDefault();
          const {toggleCompose } = this.props;
          const { to, subject, message } = this.state;
        console.log(to, subject, message);
        emailService.addEmail(to, subject, message);
        toggleCompose();
        // onBack();
      }
    render() {
        const { to, subject, message } = this.state;
        const {toggleCompose } = this.props;
        return (
            
            <form className="email-compose" onSubmit={(event)=>{this.onAddEmail(event)}}>
                {/* <h1>New Message</h1> */}
                    <label htmlFor="to" className={'to-label'}>To:</label>
                    <input type="text" name="to" id="to" className={'to-input'} value={to} onChange={this.handleChange} />
                    {/* <label htmlFor="cc" >Cc:</label>
                    <input type="text" name="cc" id="cc"  value={cc} onChange={this.handleChange} />
                    <label htmlFor="bcc" >Bcc:</label>
                    <input type="text" name="bcc" id="bcc" value={bcc} onChange={this.handleChange} /> */}
                    <label htmlFor="subject" className={'subject-label'}>Subject:</label>
                    <input type="text" name="subject" id="subject" className={'subject-input'}  value={subject} onChange={this.handleChange} />
                    {/* <label htmlFor=" message" className={'message-label'}>Message:</label> */}
                    <textarea id=" message" name="message" value={message} className={'message-input'} placeholder="Enter your message here"
                     rows="4" cols="50" onChange={this.handleChange} >
                        
                    </textarea>
                    <button className={'send-btn'}>Send</button>
                   <button className={'back-compose-btn'}> <Link  to={`/email/inbox`} onClick={() => toggleCompose()}><span>go back</span></Link></button>
                    {/* <Link to={`/email`} >go back </Link> */}
                    {/* <div className="goback-btn" onClick={() => toggleCompose()}> go back </div> */}
                    {/* <a href="#" onClick={this.onBack}>go back</a> */}
                    {/* <Link to={`/email`}>Go Back</Link> */}
                </form>
        )
    }
}