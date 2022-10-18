// Functional Component

import React from 'react';

// function Greet() {
//   return <h1>Hello Thad</h1>
// }

// // Arrow Function with props
// const Greet = (props) => {
//   console.log(props)
//   return (
//     <div className='cardClass'>
//       <h1>Hello {props.name} a.k.a. {props.heroName}</h1>
//       {props.children}
//     </div>
//   )
// }

// Destructured props in the Function BODY
const Greet = (props) => {
  const { name, heroName, children } = props
  return (
    <div className='cardClass'>
      <h1>Hello {name} a.k.a. {heroName}</h1>
      {children}
    </div>
  )
}

// // Destructured props in the Function PARAMETER 
// const Greet = ({ name, heroName, children }) => {
//   return (
//     <div className='cardClass'>
//       <h1>Hello {name} a.k.a. {heroName}</h1>
//       {children}
//     </div>
//   )
// }

export default Greet