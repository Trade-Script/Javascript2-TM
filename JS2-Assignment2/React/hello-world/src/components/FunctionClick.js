// Functional Component - onClick event

import React from 'react'

function FunctionClick() {

  function clickHandler() {
    console.log('Button Clicked')
  }

  return (
    <div className='cardClass2'>
      <p>Function Click</p>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick