import { EmailList } from "./email-list.jsx"
import { emailService } from "../services/email.service.js"
import { eventBusService } from '../../../services-general/event-bus-service.js'
import { EmailFilter } from "../cmps/email-filter.jsx";
import { EmailSort } from "../cmps/email-sort.jsx";


export class EmailApp extends React.Component {

  state = {
    emails: null,
    emailsReadCount: 0,
    filterBy: '', //object
    sortBy: '',
    folderForFilter: ' '


  };

  componentDidMount() {
    let { folder } = this.props.match.params
    this.setState({ folderForFilter: folder }, () => { this.loadEmails() })
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.folder !== this.props.match.params.folder) {
      const { folder } = this.props.match.params
      this.setState({ folderForFilter: folder }, () => { this.loadEmails() })
    }

  }

  loadEmails = () => {
    const { sortBy, filterBy, folderForFilter } = this.state;
    emailService.query(sortBy, filterBy, folderForFilter).then((emails) => {
      this.setState({ emails })
      emailService.countUnreadMails().then((count) => {
        eventBusService.emit('readMailsCount', count)

      })
    })

  }


  onAddEmail = () => {
    emailService.addEmail();
  }
  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadEmails);
  }
  onSetSort = (sortBy) => {
    this.setState({ sortBy }, this.loadEmails);
  }


  render() {
    const { emails } = this.state;
    if (!emails) return <h2>Loading...</h2>

    return (
      <div className="email-app ">
        <section className="filt-sort flex" >
          <EmailFilter onSetFilter={this.onSetFilter} />
          <h3 className="email-sort-title">Sort by</h3>
          <EmailSort className="email-sort" onSetSort={this.onSetSort} />
        </section>
        <EmailList emails={emails} />
      </div>
    );
  }
}
