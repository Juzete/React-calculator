import React from 'react'
import { CalcHistory } from './components'

const History = props => {
  return (
    <CalcHistory>
      <div>History</div>
      <div> {props.children}</div>
    </CalcHistory>
  )
}

export default History
