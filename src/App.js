import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import { rootReducers } from './rootReducers'
import rootSaga from './saga'

import Title from './Title'
import Text from './Text'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    group: rootReducers
  }),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

const App = () => (
  <Provider store={store}>
    <Title />
    <Text />
  </Provider>
)

export default App
