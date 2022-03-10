const {
  PRESS_BUTTON,
  ADD_SYMBOL,
  ERASE_LAST_SYMBOL,
  ERASE_ALL_SYMBOLS,
  CALCULATE,
} = require('../constants')

export const pressButtonAction = (formula, type) => ({
  type: PRESS_BUTTON,
  payload: {
    formula: formula,
    type: type,
  },
})

export const addSymbolAction = formula => ({
  type: ADD_SYMBOL,
  payload: {
    formula: formula,
  },
})

export const eraseLastSymbolAction = () => ({
  type: ERASE_LAST_SYMBOL,
})

export const eraseAllSymbolsAction = () => ({
  type: ERASE_ALL_SYMBOLS,
})

export const calculateAction = () => ({
  type: CALCULATE,
})
