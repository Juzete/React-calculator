import { useCalculatorSelector } from '@/hooks'
import { Heading } from '@/pages/Home/components'
import React from 'react'
import { CalcHistory, HistoryElements } from './components'

const History = props => {
  const allData = useCalculatorSelector()

  return (
    <CalcHistory>
      <Heading>History</Heading>
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
