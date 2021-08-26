export class NoteFilter extends React.Component {
  state = {
    filterBy: {
      type: '',
    },
  };

  handleChange = (ev) => {
    const field = ev.target.name;
    const value = ev.target.value;
    console.log(value);
    console.log(field);
    this.setState(
      { filterBy: { ...this.state.filterBy, [field]: value } },
      () => {
        this.props.onSetFilter(this.state.filterBy);
      }
    );
  };

  render() {
    return (
      <select name='type' onChange={this.handleChange} className='note-filter'>
        <option value='all' name='all'>
          All
        </option>
        <option value='text' name='text'>
          Text
        </option>
        <option value='image' name='image'>
          Image
        </option>
        <option value='todo' name='todo'>
          Todo
        </option>
        <option value='video' name='video'>
          Video
        </option>
      </select>
    );
  }
}
