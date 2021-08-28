export class LongTxt extends React.Component {
  state = {
    isLongTxtShown: false,
  };

  getTextToShow = (txt) => {
    const { isLongTxtShown } = this.state;
    if (isLongTxtShown) return txt;
    return txt.substring(0, 100);
  };

  onToggleText = () => {
    this.setState((prevState) => ({
      isLongTxtShown: !prevState.isLongTxtShown,
    }));
  };

  render() {
    let { text } = this.props;
    const { isLongTxtShown } = this.state;
    if (!text) text = 'No Text';
    return (
      <article className='long-text'>
        <p>
          {this.getTextToShow(text)}
          {text.length > 100 && (
            <span onClick={() => this.onToggleText()}>
              {isLongTxtShown ? '. Show Less' : '...Show More'}
            </span>
          )}
        </p>
      </article>
    );
  }
}
