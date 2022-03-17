import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Application from '@/App'

import { store } from '@/store/store'
import GlobalStyles from '@/globalStyles'
import themeSelect from './utils/themeSelect'
import ErrorBoundary from './components/ErrorBoundary'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={themeSelect}>
      <BrowserRouter>
        <ErrorBoundary>
          <Application />
        </ErrorBoundary>
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
)
