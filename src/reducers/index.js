import { combineReducers } from 'redux'
import items from './items'
import visibilityFilter from './visibilityFilter'

const listApp = combineReducers({
  items,
  visibilityFilter
})

export default listApp
