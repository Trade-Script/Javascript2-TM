import React from 'react'
import Columns from './Columns'

function Table() {
  return (
    <div className='cardClass3'>
      <p>React Fragment</p>
      <table>
        <tbody>
          <tr>
            <Columns />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table