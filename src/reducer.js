import { ADD_ITEM, TOGGLE_ITEM, SET_FILTER, Filters } from './actions'
import { combineReducers } from 'redux'
const { SHOW_ALL } = Filters

function filter (state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_FILTER:
      return action.filter
    default:
    return state
  }
}

function list(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          text: action.text,
          complete: false
        }
      ]
    case TOGGLE_ITEM:
      return state.map((item, index) => {
        if (index === action.index) {
          return Object.assign({}, item, {
            complete: !item.complete
          })
        }
        return item
      })
      default:
        return state
  }
}

const listApp = combineReducers ({
  filter,
  list
})

export default listApp
