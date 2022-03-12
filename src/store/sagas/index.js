import { all } from 'redux-saga/effects'
import {
  addSymbolWatcher,
  calculateWatcher,
  eraseAllSymbolsWatcher,
  eraseLastSymbolWatcher,
} from './calculatorSaga'

export default function* rootSaga() {
  yield all([
    addSymbolWatcher(),
    eraseLastSymbolWatcher(),
    eraseAllSymbolsWatcher(),
    calculateWatcher(),
  ])
}
