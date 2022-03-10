const { put, takeEvery } = require('redux-saga/effects')
const { pressButtonAction } = require('../actions')
const { ADD_SYMBOL, PRESS_BUTTON } = require('../constants')

function* printDisplayWorker() {
  yield put(pressButtonAction)
}

export function* displayWatcher() {
  yield takeEvery(PRESS_BUTTON, printDisplayWorker)
}
