// Functional Component with JSX

import React from 'react';

// With JSX
const Hello = () => {
  return (
    <div id='hello'>
      <h3 className='cardClass'>Welcome to the world of JS React.</h3>
    </div>
  )
}

// Without JSX
// const Hello = () => {
//   return React.createElement('div', { id: 'hello', className: 'dummyClass' },
//     React.createElement('h3', null, 'Welcome to the real world of JS React'))
// }

export default Hello