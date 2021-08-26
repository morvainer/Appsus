import { emailService } from '../services/email.service.js'



export class EmailDetails extends React.Component {


    state = {
        emailId: this.props.match.params.emailId,
        currEmail: null

    }
    componentDidMount() {
        console.log(this.props.match.params.emailId);
        console.log(this.state.emailId);
        this.getEmailByID();
        this.updateIsRead();
        console.log('currEmail is: ', this.state.currEmail);



    }
 updateIsRead =() =>{
    emailService.updateEmailIsRead(this.state.emailId);
 }
    // isRead = () => {
    //     this.setState((prevState) => ({
    //         currEmail: { ...prevState.currEmail, isRead: !prevState.currEmail.isRead },
    //     }))


    // }

    // () => { console.log('is read true?', this.state.currEmail) }

    //   isRead2 = () => {  
    //     this.setState(prevState => ({ isRead: !prevState.isRead }), ()=>{console.log('is read?', this.state.isRead)})

    //   }

    getEmailByID = () => {

        emailService.getEmailById(this.state.emailId).then((currEmail) => {
            this.setState({ currEmail });
            console.log(currEmail);
            // const isRead = currEmail.isRead
            // console.log('isRead is', isRead);
            // this.isRead();
            //   this.setState({currEmail, [isRead]: true});
            //   console.log('isRead2 is', isRead);
            // this.isRead();
        })
    }

    render() {
        const { currEmail } = this.state;
        if (!currEmail) return <h2>Loading...</h2>
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
