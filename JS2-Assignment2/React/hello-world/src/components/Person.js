import React from 'react'

function Person({ person }) {
  return (
    <div>
      <h5>My name is {person.name}. I am {person.age} years old. I know {person.skill}.</h5>
    </div>
  )
}

export default Person