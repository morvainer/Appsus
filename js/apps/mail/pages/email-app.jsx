export class EmailApp extends React.Component {
  render() {
    return (
      <div>
        <h1>This is my email app</h1>
        <h2>asdfafd</h2>
        <Aside />
        <Switch>
          <Route />
          <Route />
          <Route component={EmailDetails} path='/email/:emailsId' />
          <Route component={MailList} path='/email' />
        </Switch>
      </div>
    );
  }
}
