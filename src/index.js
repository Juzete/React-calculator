import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import Application from '@/App'

import { store } from '@/store/store'
import GlobalStyles from '@/globalStyles'
import ErrorBoundary from './components/ErrorBoundary'
import ThemeWrapper from './components/ThemeWrapper'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <ThemeWrapper>
      <HashRouter>
        <ErrorBoundary>
          <Application />
        </ErrorBoundary>
        <GlobalStyles />
      </HashRouter>
    </ThemeWrapper>
  </Provider>,
  document.getElementById('root'),
)
