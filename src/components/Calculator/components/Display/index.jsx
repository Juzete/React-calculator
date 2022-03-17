import { useCalculatorSelector } from '@/hooks'
import React from 'react'
import { CalcDisplay } from './components'

const Display = props => {
  const allData = useCalculatorSelector()

  return (
    <CalcDisplay>
      {allData.currentDisplay.length > 0
        ? allData.currentDisplay
        : '0'}
    </CalcDisplay>
  )
}

export default Display
