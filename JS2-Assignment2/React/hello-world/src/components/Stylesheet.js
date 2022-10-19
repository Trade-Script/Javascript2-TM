import React from 'react'
import './myStyles.css'

function Stylesheet(props) {

  let className = props.primary ? 'primary' : ''

  return (
    <div className='cardClass3'>
      <p>Stylesheet</p>
      <h1 className={`${className} font-xl`}>Stylesheets</h1>
    </div>
  )
}

export default Stylesheet