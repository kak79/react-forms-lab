import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charsLeft: props.maxChars,
      charsExceed: false,
      postText: ''
    };
  }

  
  handleChange(event) {
    
    if (this.state.charsExceed) {
      return alert("too many characters!")
    }

    this.setState({
        charsLeft: this.props.maxChars - event.target.value.length,
        charsExceed: event.target.value.length >  this.props.maxChars  ?  true  :  false,
        postText: event.target.value
    });
  }

  render() {
    return (
      <div>
        <p>Characters Left:  {this.state.charsLeft}</p>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          value={this.state.postText}
          onChange={this.handleChange.bind(this)}
          placeholder="Type here"
        />
      </div>
    );
  }
}

export default TwitterMessage;
