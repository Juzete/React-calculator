import calculatorButtons from '@/constants/calculatorButtons'
import {
  addSymbolAction,
  calculateAction,
  eraseAllSymbolsAction,
  eraseLastSymbolAction,
} from '@/store/actions'
import { store } from '@/store/store'

const checkOperationType = operation => {
  return calculatorButtons.some(
    item =>
      item.formula === +operation && item.type === 'number',
  )
}

const checkButtonType = (type, symbol, operations) => {
  console.log(type, symbol)
  const lastOperation = operations[operations.length - 1]
  switch (type) {
    case 'number':
      store.dispatch(addSymbolAction(symbol))
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
