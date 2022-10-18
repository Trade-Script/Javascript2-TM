// Class Component - onClick event

import React, { Component } from 'react'

class ClassClick extends Component {

  clickHandler() {
    console.log('Clicked the button')
  }

  render() {
    return (
      <div className='cardClass2'>
        <p>Class Click</p>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick