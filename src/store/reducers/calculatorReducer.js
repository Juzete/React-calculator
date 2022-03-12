import {
  ADD_SYMBOL,
  CALCULATE,
  ERASE_ALL_SYMBOLS,
  ERASE_LAST_SYMBOL,
} from '@/store/constants'
import { parsePlusSeparatedExpression } from '@/utils/expressionParser'

const INITIAL_STATE = {
  currentDisplay: '',
  operations: [],
  history: [],
}

const calculatorReducer = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ADD_SYMBOL:
      return {
        ...state,
        operations: [
          ...state.operations,
          action.payload.formula,
        ],
        currentDisplay: [
          ...state.operations,
          action.payload.formula,
        ].join(''),
      }

    case ERASE_LAST_SYMBOL:
      return {
        ...state,
        operations: [...state.operations].slice(0, -1),
        currentDisplay: [...state.operations]
          .slice(0, -1)
          .join(''),
      }

    case ERASE_ALL_SYMBOLS:
      return {
        ...state,
        operations: [],
        currentDisplay: '',
      }

    case CALCULATE:
      return {
        ...state,
        operations: [
          parsePlusSeparatedExpression(
            state.operations.join(''),
          ),
        ],
        currentDisplay: parsePlusSeparatedExpression(
          state.operations.join(''),
        ).toString(),
        history: [...state.history, state.currentDisplay],
      }

    default:
      return state
  }
}

export default calculatorReducer
