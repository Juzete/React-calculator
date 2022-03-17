import { useCalculatorSelector } from '@/hooks'
import darkTheme from '@/themes/darkTheme'
import lightTheme from '@/themes/lightTheme'

import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

const ThemeWrapper = ({ children }) => {
  const allData = useCalculatorSelector()

  const themeSelect = () => {
    switch (allData.theme) {
      case 'light':
        return lightTheme

      case 'dark':
        return darkTheme

      default:
        break
    }
  }

  useEffect(() => {
    console.log(allData.theme)
  }, [allData.theme])

  return (
    <React.Fragment>
      <ThemeProvider theme={themeSelect}>
        {children}
      </ThemeProvider>
    </React.Fragment>
  )
}

export default ThemeWrapper
