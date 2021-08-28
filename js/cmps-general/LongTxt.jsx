

export class LongTxt extends React.Component {

    state = {
        // isLongTxtShown: this.props.isLongTxtShown,
        isLongTxtShown: false,

    }

    getTextToShow = (text) => {
        const { isLongTxtShown } = this.state
        if (isLongTxtShown) return text;// not right- need to be be false
        return text.substring(0, 40);
    }

    onToggleText = () => {
        // const newIsLongTxtShown = !this.state.isLongTxtShown;
        this.setState((prevState) => ({ isLongTxtShown: !prevState.isLongTxtShown }));
    }

    render() {
        const { isLongTxtShown } = this.state
        const { text } = this.props

        return <p className="email-message">
            {this.getTextToShow(text)}
            {/* {text.length > 10 && <span onClick={() => this.onToggleText()}>
                {isLongTxtShown ? ' Less...' : ' More...'}</span>} */}
        </p>
    }

}