// Class Component

import React, { Component } from 'react';

// class Welcome extends Component {
//   render() {
//     return <h2 className='cardClass'>Welcome {this.props.name} a.k.a. {this.props.heroName}</h2>
//   }
// }

// Destructured props and state
class Welcome extends Component {
  render() {
    const { name, heroName } = this.props
    // const {state1, state2} = this.state
    return <h2 className='cardClass'>Welcome {name} a.k.a. {heroName}</h2>
  }
}

export default Welcome