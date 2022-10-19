import React from 'react'

function ChildComponent(props) {
  return (
    <div className='cardClass3'>
      <p>Parent & Child Components</p>
      <button onClick={() => props.greetHandler('Your Son')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent