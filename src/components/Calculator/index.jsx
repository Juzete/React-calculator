import React from 'react'
import { CalculatorWrapper } from './components'
import Display from './components/Display'
import History from './components/History'
import Keypad from './components/Keypad'

const Calculator = props => {
  return (
    <CalculatorWrapper>
      <Display>4000.5</Display>
      <History> </History>
      <Keypad> </Keypad>
    </CalculatorWrapper>
  )
}

export default Calculator
