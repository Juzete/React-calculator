import { CALCULATOR_BUTTONS } from '@/constants'
import {
  addSymbolAction,
  calculateAction,
  eraseAllSymbolsAction,
  eraseLastSymbolAction,
} from '@/store/actions'
import { store } from '@/store/store'

const checkOperationType = operation => {
  return CALCULATOR_BUTTONS.some(item => {
    if (isNaN(+operation)) {
      return (
        item.formula === operation && item.type === 'number'
      )
    } else {
      return (
        item.formula === +operation &&
        item.type === 'number'
      )
    }
  })
}

const checkIsDot = (symbol, operation) =>
  symbol === '.' && symbol === operation

const checkButtonType = (type, symbol, operations) => {
  const lastOperation = operations[operations.length - 1]
  switch (type) {
    case 'number':
      if (!checkIsDot(symbol, lastOperation)) {
        store.dispatch(addSymbolAction(symbol))
      }
      break

    case 'operator':
      if (checkOperationType(lastOperation)) {
        store.dispatch(addSymbolAction(symbol))
      } else {
        store.dispatch(eraseLastSymbolAction())
        store.dispatch(addSymbolAction(symbol))
      }
      break

    case 'calculate':
      store.dispatch(calculateAction())
      break

    case 'key':
      if (symbol === 'clearLast') {
        store.dispatch(eraseLastSymbolAction())
      } else {
        store.dispatch(eraseAllSymbolsAction())
      }
      break

    default:
      break
  }
}

export default checkButtonType
