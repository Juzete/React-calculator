import React from 'react'
import { CalcDisplay } from './components'

const Display = props => {
  return <CalcDisplay>{props.children}</CalcDisplay>
}

export default Display
