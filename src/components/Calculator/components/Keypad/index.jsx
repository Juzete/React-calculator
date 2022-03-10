import calculatorButtons from '@/constants/calculatorButtons'
import { pressButtonAction } from '@/store/actions'
import React from 'react'
import { useDispatch } from 'react-redux'
import { CalcButton, CalcKeypad } from './components'

const Keypad = () => {
  const dispatch = useDispatch()

  const buttonHandler = e => {
    dispatch(
      pressButtonAction(
        e.target.getAttribute('data-formula'),
        e.target.getAttribute('data-type'),
      ),
    )
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
