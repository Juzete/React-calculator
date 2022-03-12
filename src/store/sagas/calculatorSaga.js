const { put, takeEvery } = require('redux-saga/effects')
const {
  addSymbolAction,
  calculateAction,
} = require('../actions')
const {
  ADD_SYMBOL,
  ERASE_LAST_SYMBOL,
  ERASE_ALL_SYMBOLS,
} = require('../constants')

function* addSymbolWorker() {
  yield put(addSymbolAction)
}

export function* addSymbolWatcher() {
  yield takeEvery(ADD_SYMBOL, addSymbolWorker)
}

function* eraseLastSymbolWorker() {
  yield put(addSymbolAction)
}

export function* eraseLastSymbolWatcher() {
  yield takeEvery(ERASE_LAST_SYMBOL, eraseLastSymbolWorker)
}

function* eraseAllSymbolsWorker() {
  yield put(addSymbolAction)
}

export function* eraseAllSymbolsWatcher() {
  yield takeEvery(ERASE_ALL_SYMBOLS, eraseAllSymbolsWorker)
}

function* calculateWorker() {
  yield put(calculateAction)
}

export function* calculateWatcher() {
  yield takeEvery(ERASE_ALL_SYMBOLS, calculateWorker)
}
