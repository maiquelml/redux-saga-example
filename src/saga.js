import { all, takeEvery, put } from 'redux-saga/effects'

const delay = ms => new Promise(res => setTimeout(res, ms))

function* asyncChangeTitle({ payload }) {

  yield delay(2000)

  yield put({
    type: 'ACTION_TITLE',
    payload
  })
}

export default function* root() {
  yield all([
    takeEvery('ASYNC_ACTION_TITLE', asyncChangeTitle),
  ])
}
