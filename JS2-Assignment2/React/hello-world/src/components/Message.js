// Class Component

import React, { Component } from 'react';

class Message extends Component {

  constructor() {
    super()
    this.state = {
      message: 'Welcome Visitor'
    }
  }

  changeMessage() {
    this.setState({
      message: 'Thank you for subscribing'
    })
  }

  render() {
    return (
      <div className='cardClass2'>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}

export default Message