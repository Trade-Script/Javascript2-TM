import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true
    }
  }

  render() {

    // // Short Circuit
    // return this.state.isLoggedIn &&
    //   <div className='cardClass'>
    //     <p>User Greeting</p>
    //     <div>
    //       Welcome Thad
    //     </div>
    //   </div>


    // Ternary Conditional Operator (recommended)
    return (
      this.state.isLoggedIn ? (
        <div className='cardClass3'>
          <p>User Greeting</p>
          <div>
            Welcome Thad
          </div>
        </div>
      ) : (
        <div className='cardClass'>
          <p>User Greeting</p>
          <div>
            Welcome Guest
          </div>
        </div>
      )
    )


    // // Element Variables
    // let message
    // if (this.state.isLoggedIn) {
    //   message = <div className='cardClass'>
    //     <p>User Greeting</p>
    //     <div>
    //       Welcome Thad
    //     </div>
    //   </div>
    // } else {
    //   message = <div className='cardClass'>
    //     <p>User Greeting</p>
    //     <div>
    //       Welcome Guest
    //     </div>
    //   </div>
    // }
    // return <div>{message}</div>


    // // if/else
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div className='cardClass'>
    //       <p>User Greeting</p>
    //       <div>
    //         Welcome Thad
    //       </div>
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div className='cardClass'>
    //       <p>User Greeting</p>
    //       <div>
    //         Welcome Guest
    //       </div>
    //     </div>
    //   )
    // }


    // return (
    //   <div className='cardClass'>
    //     <p>User Greeting</p>
    //     <div>
    //       Welcome Thad
    //     </div>
    //     <div>
    //       Welcome Guest
    //     </div>
    //   </div>
    // )

  }
}

export default UserGreeting