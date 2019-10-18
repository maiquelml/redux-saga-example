import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import { rootReducers } from './rootReducers'

import Title from './Title'

const store = createStore(
  combineReducers({
    group: rootReducers
  })
)

const App = () => (
  <Provider store={store}>
    <Title />
  </Provider>
)

export default App
