import calculatorButtons from '@/constants/calculatorButtons'
import React from 'react'
import { CalcButton, CalcKeypad } from './components'

const Keypad = () => {
  return (
    <CalcKeypad>
      {calculatorButtons.map(item => (
        <CalcButton key={item.symbol}>
          {item.symbol}
        </CalcButton>
      ))}
    </CalcKeypad>
  )
}

export default Keypad
