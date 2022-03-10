import { all } from 'redux-saga/effects'
import { displayWatcher } from './calculatorSaga'

export default function* rootSaga() {
  yield all([displayWatcher()])
}
