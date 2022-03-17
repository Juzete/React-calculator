import { useCalculatorSelector } from '@/hooks'
import React from 'react'
import {
  CalcHeading,
  CalcHistory,
  HistoryElements,
} from './components'

const History = props => {
  const allData = useCalculatorSelector()

  return (
    <CalcHistory>
      <CalcHeading>History</CalcHeading>
      <div>
        {allData.history.map(item => (
          <HistoryElements key={item}>
            {item}
          </HistoryElements>
        ))}
      </div>
    </CalcHistory>
  )
}

export default History
