import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const loggerMiddleware = store => next => action => {
  console.groupCollapsed('dispatching', action.type)
  console.log('prev state', store.getState())
  console.log('action', action)
  const result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

export const store = createStore(
  rootReducer,
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(
        applyMiddleware(sagaMiddleware, loggerMiddleware),
      )
    : applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga)
