import React from 'react'
import {render} from 'react-dom'
import App from 'components/app'
import { createStore } from 'redux'
import listApp from './reducer'

let store = createStore (listApp)



render(<App />, document.getElementById('app'))
