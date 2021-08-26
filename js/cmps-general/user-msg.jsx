// import { eventBusService } from '../services/event-bus-service.js';

export class UserMsg extends React.Component {
  state = {
    msg: {
      txt: '',
    },
    isShown: false,
  };
  // removeEventBus;
  timeoutId;

  componentDidMount() {
    // this.removeEventBus = eventBusService.on('user-msg', (msg) => {
    //   this.setState({ msg, isShown: true }, () => {
    //     if (this.timeoutId) clearTimeout(this.timeoutId);
    //     this.timeoutId = setTimeout(this.onCloseMsg, 4000);
    //   });
    // });
  }

  componentWillUnmount() {
    // this.removeEventBus();
  }

  onCloseMsg = () => {
    this.setState({ msg: null, isShown: false });
    clearTimeout(this.timeoutId);
  };

  render() {
    const { msg, isShown } = this.state;
    if (!isShown) return null;
    if (!msg) return <React.Fragment></React.Fragment>;
    return (
      <section className={`user-msg ${msg.type || ''}`}>
        <h1>{msg.txt}</h1>
        <button onClick={this.onCloseMsg}>X</button>
      </section>
    );
  }
}
