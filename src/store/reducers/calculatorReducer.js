import checkButtonType from '@/helpers/checkButtonType'
import {
  ADD_SYMBOL,
  ERASE_ALL_SYMBOLS,
  ERASE_LAST_SYMBOL,
  PRESS_BUTTON,
} from '@/store/constants'

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
    case PRESS_BUTTON:
      // checkButtonType(
      //   action.payload.type,
      //   action.payload.formula,
      //   state.operations,
      // )
      return state

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

    default:
      return state
  }
}

export default calculatorReducer
