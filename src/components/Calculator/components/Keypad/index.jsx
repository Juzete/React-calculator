import { CALCULATOR_BUTTONS } from '@/constants'
import checkButtonType from '@/utils/checkButtonType'
import { useCalculatorSelector } from '@/hooks'
import React from 'react'
import { CalcButton, CalcKeypad } from './components'

const Keypad = () => {
  const allData = useCalculatorSelector()

  const buttonHandler = e => {
    checkButtonType(
      e.target.getAttribute('data-type'),
      e.target.getAttribute('data-formula'),
      allData.operations,
    )
  }

  return (
    <CalcKeypad>
      {CALCULATOR_BUTTONS.map(item => (
        <CalcButton
          key={item.symbol}
          onClick={buttonHandler}
          data-type={item.type}
          data-formula={item.formula}>
          {item.symbol}
        </CalcButton>
      ))}
    </CalcKeypad>
  )
}

export default Keypad
