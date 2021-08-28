// import React from "react";

import { noteService } from '../services/note.service.js';

export class NoteImage extends React.Component {
  state = {
    note: null,
  };

  componentDidMount() {
    const { note } = this.props;
    this.setState({ note: note });
  }

  saveChanges = (ev) => {
    ev.preventDefault();
    // const { note } = this.state;
    this.props.onSave(this.state.note);
  };

  handleChange = (ev) => {
    ev.preventDefault();
    const value = ev.target.value;
    const field = ev.target.name;
    this.setState({
      note: {
        ...this.state.note,
        info: { ...this.state.note.info, [field]: value },
      },
    });
  };
  render() {
    const { note } = this.props;
    if (!this.state.note) return <h1>loading...</h1>;
    const { title, url } = this.state.note.info;

    return (
      <div className='note-image'>
        <i className='far fa-image'></i>
        {!note.isEditOn && (
          <div>
            <h3 id={note.id}>{note.info.title}</h3>
            <img src={url} />
          </div>
        )}
        {note.isEditOn && (
          <div>
            <form onSubmit={this.saveChanges}>
              <h3 id={note.id}>{note.info.title}</h3>
              <input
                name='title'
                value={title}
                // placeholder='Enter title...'
                onChange={this.handleChange}
              />

              <img src={url} />
              <input
                name='url'
                value={url}
                // placeholder='Enter URL...'
                onChange={this.handleChange}
              />
              <button>Save Edit</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}
