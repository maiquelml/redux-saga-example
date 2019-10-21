import { all, takeEvery, put, takeLatest, delay as delaySaga } from 'redux-saga/effects'

const delay = ms => new Promise(res => setTimeout(res, ms))

function* asyncChangeTitle({ payload }) {

  yield delay(2000)

  yield put({
    type: 'ACTION_TITLE',
    payload
  })
}

function* asyncChangeText({ payload }) {

  yield delaySaga(2000)

  yield put({
    type: 'ACTION_TEXT',
    payload
  })
}

export default function* root() {
  yield all([
    takeEvery('ASYNC_ACTION_TITLE', asyncChangeTitle),
    takeLatest('ASYNC_ACTION_TEXT', asyncChangeText)
  ])
}
