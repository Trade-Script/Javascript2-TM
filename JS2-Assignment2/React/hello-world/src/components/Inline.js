import React from 'react'

function Inline() {

  const heading = {
    fontSize: '52px',
    color: 'blue'
  }

  return (
    <div className='cardClass3'>
      <p>Inline CSS</p>
      <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline