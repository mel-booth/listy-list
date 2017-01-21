import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import listApp from './reducers/index'
import App from './components/app'

let store = createStore (listApp)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
