// import React from "react";
import { ToDoItem } from './todo-item.jsx';

export class NoteTodo extends React.Component {
  state = {
    note: null,
    newTodo: '',
    label: '',
  };

  componentDidMount() {
    const { note } = this.props;
    this.setState({ note: note });
  }

  handleChange = (ev) => {
    ev.preventDefault();
    const value = ev.target.value;
    const field = ev.target.name;
    if (field === 'todos') {
      this.setState({ newTodo: value });
    } else {
      this.setState({
        note: {
          ...this.state.note,
          info: { ...this.state.note.info, [field]: value },
        },
      });
    }
  };

  saveChanges = (ev) => {
    ev.preventDefault();
    const { todos } = this.state.note.info;
    todos.push(this.state.newTodo);
    const note = this.state.note;
    this.props.onSave(note);
  };

  render() {
    const { note } = this.props;
    if (!this.state.note) return <h1>loading...</h1>;
    const { label, todos } = this.state.note.info;
    return (
      <div className='note-todo'>
        <i className='fas fa-list'></i>
        {!note.isEditOn && <h3 id={note.id}>{label}</h3>}
        {note.isEditOn && (
          <form onSubmit={this.saveChanges}>
            <input
              type='text'
              name='label'
              onChange={this.handleChange}
              value={this.state.note.info.label}
            />
          </form>
        )}

        <ul>
          {todos.map((todo, idx) => {
            return <ToDoItem key={idx} todo={todo} />;
          })}
        </ul>

        {note.isEditOn && (
          <form onSubmit={this.saveChanges}>
            <input
              type='text'
              name='todos'
              value={this.state.newTodo}
              onChange={this.handleChange}
            />
            <button>Save Edit</button>
          </form>
        )}
      </div>
    );
  }
}
