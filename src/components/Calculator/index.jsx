import React from 'react'
import { CalculatorWrapper } from './components'
import Display from './components/Display'
import History from './components/History'
import Keypad from './components/Keypad'

const Calculator = () => {
  return (
    <CalculatorWrapper>
      <Display />
      <History />
      <Keypad />
    </CalculatorWrapper>
  )
}

export default Calculator
