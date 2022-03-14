import { all } from 'redux-saga/effects'
import {
  addSymbolWatcher,
  calculateWatcher,
  eraseAllSymbolsWatcher,
  eraseLastSymbolWatcher,
  switchThemeWatcher,
} from './calculatorSaga'

export default function* rootSaga() {
  yield all([
    addSymbolWatcher(),
    eraseLastSymbolWatcher(),
    eraseAllSymbolsWatcher(),
    calculateWatcher(),
    switchThemeWatcher(),
  ])
}
