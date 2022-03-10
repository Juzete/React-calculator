import calculatorButtons from '@/constants/calculatorButtons'
import {
  addSymbolAction,
  calculateAction,
  eraseLastSymbolAction,
} from '@/store/actions'
import { store } from '@/store/store'

const checkOperationType = operation => {
  return calculatorButtons.some(
    item =>
      item.formula === operation && item.type === 'number',
  )
}

const checkButtonType = (type, symbol, operations) => {
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

    default:
      break
  }
}

export default checkButtonType
