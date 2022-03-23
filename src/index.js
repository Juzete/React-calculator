import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Application from '@/App'

import { store } from '@/store/store'
import GlobalStyles from '@/globalStyles'
import ErrorBoundary from './components/ErrorBoundary'
import ThemeWrapper from './components/ThemeWrapper'

ReactDOM.render(
  <Provider store={store}>
    <ThemeWrapper>
      <BrowserRouter>
        <ErrorBoundary>
          <Application />
        </ErrorBoundary>
        <GlobalStyles />
      </BrowserRouter>
    </ThemeWrapper>
  </Provider>,
  document.getElementById('root'),
)
