import { combineReducers } from 'redux'

import calculatorReducer from './calculatorReducer'

export const rootReducer = combineReducers({
  calculator: calculatorReducer,
})
