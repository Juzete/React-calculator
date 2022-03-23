const {
  ADD_SYMBOL,
  ERASE_LAST_SYMBOL,
  ERASE_ALL_SYMBOLS,
  CALCULATE,
  SWITCH_THEME,
  RESET_HISTORY,
} = require('../constants')

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

export const switchThemeAction = theme => ({
  type: SWITCH_THEME,
  payload: {
    theme: theme,
  },
})

export const resetHistoryAction = () => ({
  type: RESET_HISTORY,
})
