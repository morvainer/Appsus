export class ToDoItem extends React.Component {
  state = {
    isFinished: false,
  };

  toggleTodo = () => {
    this.setState({ isFinished: !isFinished });
  };

  render() {
    const { isFinished } = this.state;
    const { todo } = this.props;
    return (
      <li
        className={isFinished ? 'finished' : ''}
        onClick={() => this.setState({ isFinished: !isFinished })}
      >
        {todo}
      </li>
    );
  }
}
