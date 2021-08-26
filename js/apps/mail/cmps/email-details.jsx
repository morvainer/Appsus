import { emailService  } from '../services/email.service.js'



export class EmailDetails extends React.Component {
    

    state = {
      emailId: this.props.match.params.emailId,
      currEmail: null
    }
    componentDidMount() {
        console.log(this.props.match.params.emailId);
        console.log(this.state.emailId);
        this.getEmailByID();
    }

    getEmailByID = () =>{
      emailService.getEmailById(this.state.emailId).then((currEmail)=>{
          this.setState({currEmail});
          console.log(currEmail);

      })
    }

    render() {
        const { currEmail } = this.state;
        if (! currEmail) return <h2>Loading...</h2>
    return (
        <div>
            details
        <div>From: {currEmail.from}</div>
        <div>To: {currEmail.to}</div>
        <div>Subject: {currEmail.subject}</div>
        <div>Message: {currEmail.message}</div>
        </div>
    )
    }
}
