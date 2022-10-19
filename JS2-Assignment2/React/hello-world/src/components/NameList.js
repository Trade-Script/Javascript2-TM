import React from 'react'
import Person from './Person'

function NameList() {

  // // Index as a Key
  // const names = ['Thad', 'Angelica', 'Michael', 'Thad']
  // const nameList = names.map((name, index) => <h5 key={index}>{index} {name}</h5>)

  // return (
  //   <div className='cardClass'>
  //     <p>Name List</p>
  //     {nameList}
  //   </div>
  // )

  const persons = [
    {
      id: 1,
      name: 'Thad',
      age: 30,
      skill: 'React'
    }, {
      id: 2,
      name: 'Angelica',
      age: 25,
      skill: 'angular'
    }, {
      id: 3,
      name: 'Michael',
      age: 28,
      skill: 'Vue'
    }
  ]

  const personList = persons.map(person => <Person key={person.id} person={person} />)

  return (
    <div className='cardClass3'>
      <p>Name List</p>
      {personList}
    </div>
  )

}

export default NameList