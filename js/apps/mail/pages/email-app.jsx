import { EmailList } from "./email-list.jsx"
import { emailService } from "../services/email.service.js"
import { eventBusService } from '../../../services-general/event-bus-service.js'
import { EmailFilter } from "../cmps/email-filter.jsx";
import { EmailSort } from "../cmps/email-sort.jsx";

// const Router = ReactRouterDOM.HashRouter;
// const { Route, Switch, Aside } = ReactRouterDOM;

export class EmailApp extends React.Component {

  state = {
    emails: null,
    emailsReadCount: 0,
    filterBy: '', //object
    sortBy: '',
    // folder: this.props.match.params.folder,
    folderForFilter: ' '
    // selectedEmail: null,
    // unReadEmailsCount: 0,
    // filterBy: ''

  };
 
  componentDidMount() {
    // console.log('componentDidMount');
    // console.log('params is:', this.props.match.params);
    // this.loadEmails();
    let {folder} = this.props.match.params
    // console.log('folder in comp didMount is',folder);
    this.setState({folderForFilter: folder}, ()=>{  this.loadEmails()})
   
    // console.log(this.props.match.params);
    // const {folder} =this.props.match.params
    // this.setState({folder})
    // if(!folder){

    // }

    // this.removeEventBus = eventBusService.on('unRead-Emails-Count', (unReadEmailsCount) => {
    //   this.setState({ unReadEmailsCount })
  }
  
  // componentWillUnmount() {
  //   this.loadEmails();
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.folder !== this.props.match.params.folder) {
      // console.log('componentDidUpdate');
      const { folder } = this.props.match.params
      // console.log('folder in comp did update is', folder);
      this.setState({folderForFilter: folder}, ()=>{ this.loadEmails() })
      // this.loadEmails() 
      // console.log('folderfilter in comp did update', this.state.folderForFilter );
      // if(folder==='inbox'){
      //   console.log('folder in if is:', folder);
      //   this.setState({folderForFilter: 'inbox'})
      // }else{
      //   console.log('folder in if is:', folder);//sent
      //   this.setState({folderForFilter: 'sent'})
      // }
      // this.setState((prevState) => ({ folderForFilter: { ...prevState.folderForFilter}}))
      // this.setState((prevState) => ({ folderForFilter: prevState.folderForFilter }));
      //inbox
      // this.loadEmails()
    }
    
  }
 
  // console.log('books:', this.state.books);
  // }
  // getTextToShow = (text) => {
  
  // }
  loadEmails = () => {
    const {sortBy, filterBy, folderForFilter} = this.state;
    // console.log('loading emails');
    // console.log('sortBy ', sortBy);
    // console.log('filterBy ', filterBy);
    // console.log('folderForFilter  in load emails', folderForFilter);
    emailService.query(sortBy, filterBy, folderForFilter).then((emails) => {
      this.setState({ emails })
      emailService.countUnreadMails().then((count)=>{
        eventBusService.emit('readMailsCount', count )

      })
    })
    
  }
// setFolder = ()=>{
//   const {folder} = this.props.match.params
//   console.log('folder in setFolder is', folder);
//   this.setState({folderForFilter: folder})
//   console.log('folderForFilter', this.state.folderForFilter);
// }
  
  // loadEmails = () => {
  //   emailService.query(this.state.filterBy).then((emails) => {
  //     eventBusService.emit('unRead-Emails-Count', UnreadMails.length)
  //     this.setState({ emails });
  //   });
  // };

  onAddEmail = () => {
    emailService.addEmail();
  }
  onSetFilter = (filterBy) => {
    // console.log('onSetFilter ');
    this.setState({ filterBy }, this.loadEmails);
}
  onSetSort = (sortBy) => {
    // console.log('onSetSort ');
    this.setState({ sortBy }, this.loadEmails);
}
  // toggleMailsSent = () => {
  //   this.setState(prevState => ({  isMailSentShown: !prevState. isMailSentShown }))
  // }

  render() {
    // console.log('render');
    // console.log('params in render is:', this.props.match.params);
    const{folder} = this.props.match.params
    
    // console.log('folder in renderis', folder);
    
    // this.setState({folderForFilter: folder})
    // console.log('folderForFilter', this.state.folderForFilter);
    // console.log('RENDERED email-app');
    const { emails, emailsReadCount, sortBy, filterBy} = this.state;
    // console.log('sortby in emailApp is', sortBy);
    // console.log('filterby in emailApp is', filterBy);
    const { isComposeShown, isMailSentShown } = this.props;
    // console.log('emails in emailApp', emails);
    
    // console.log('folderForFilter in renderis', this.state.folderForFilter);
    if (!emails) return <h2>Loading...</h2>

    return (
      <div className="email-app ">
        {/* <section className= "email-filter">Filter by</section> */}
        <section className= "filt-sort flex" >
            <EmailFilter  onSetFilter={this.onSetFilter} />
            {/* </section> */}
        {/* <section className= "email-sort"> */}
            <h3 className= "email-sort-title">Sort by</h3>
            <EmailSort className= "email-sort" onSetSort={this.onSetSort} />
            </section>
        {/* <button onClick={this.onAddEmail} >Add Email</button> */}
        {/* <Link to="/email/addEmail">Add Email </Link> */}
        {/* {console.log('email in render are:', emails)} */}
        {/* <h3>Folder: {this.state.folderForFilter}</h3> */}
        <EmailList emails={emails} />
        {/* {isMailSentShown &&<SentMailList emails={emails}/>} */}
        {/* <h2>This is section after email list</h2> */}

      </div>
    );
  }
}
