// import React from 'react';

export class NoteTxt extends React.Component {
  state = {
    note: null,
  };
  componentDidMount() {
    const { note } = this.props;
    this.setState({ note: note });
  }

  saveChanges = (ev) => {
    ev.preventDefault();
    const { note } = this.state;
    this.props.onSave(note);
  };

  handleChange = (ev) => {
    ev.preventDefault();
    const value = ev.target.value;
    this.setState({
      note: {
        ...this.state.note,
        info: { ...this.state.note.info, text: value },
      },
    });
  };

  render() {
    const { note } = this.props;
    if (!this.state.note) return <h1>loading...</h1>;
    const { text } = this.state.note.info;
    return (
      <div className='note-txt-container'>
        <i className='fas fa-font icon'></i>
        <div className='note-txt'>
          {!note.isEditOn && <h3 id={note.id}>{note.info.text}</h3>}
          {note.isEditOn && (
            <form onSubmit={this.saveChanges}>
              <textarea value={text} onChange={this.handleChange} />
              <button>Save Edit</button>
            </form>
          )}
        </div>
      </div>
    );
  }
}
