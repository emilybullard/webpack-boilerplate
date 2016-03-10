import style from './styles/';
import React from 'react';
import ReactDOM from 'react-dom';

//WORK IN PROGRESS:

class HelloMessage extends React.Component {
  constructor(){
    super();
    this.state = {
      message : ['hello', 'world']
    };
  }

  _clickHandler(event) {
    console.log(this.refs.message.value);
    this.setState ({
      message : event.target.value
    });
    console.log(this.state.message);
  }

  _handleButton(event) {
    var newMessages = this.state.messageList.slice();
    newMessages.push(this.state.message)
    this.setState({
      message: newMessages
    })
    console.log(this.state.message);
  }


  render() {
    return (
      <div>
        <input type="text" ref="message" value={this.state.value} onChange="" />
        <button onClick={this._clickHandler.bind(this)}>Click Me</button>
        <ul>{}</ul>
      </div>
    );
  }
}


var mountPoint = document.querySelector("#app");
ReactDOM.render(<HelloMessage/>, mountPoint);
