import calculatorButtons from '@/constants/calculatorButtons'
import checkButtonType from '@/helpers/checkButtonType'
import { useCalculatorSelector } from '@/hooks'
import { pressButtonAction } from '@/store/actions'
import React from 'react'
import { useDispatch } from 'react-redux'
import { CalcButton, CalcKeypad } from './components'

const Keypad = () => {
  const dispatch = useDispatch()
  const allData = useCalculatorSelector()

  const buttonHandler = e => {
    checkButtonType(
      e.target.getAttribute('data-type'),
      e.target.getAttribute('data-formula'),
      allData.operations,
    )

    // dispatch(
    //   pressButtonAction(
    //     e.target.getAttribute('data-formula'),
    //     e.target.getAttribute('data-type'),
    //   ),
    // )
  }

  return (
    <CalcKeypad>
      {calculatorButtons.map(item => (
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
